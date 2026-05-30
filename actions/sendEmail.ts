"use server";

import React from "react";
import { headers } from "next/headers";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

type SubmissionDetails = {
  ipAddress: string;
  browserInfo: string;
  userAgent: string;
  userTimeZone: string;
  userLocalTime: string;
  serverReceivedAt: string;
};

const turnstileVerifyUrl =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

let resendClient: Resend | null = null;

const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
};

const getFormString = (formData: FormData, key: string) => {
  const value = formData.get(key);

  return typeof value === "string" ? value : "";
};

const getHeaderString = (headersList: Headers, key: string) =>
  headersList.get(key) || "";

const getFirstForwardedIp = (value: string) =>
  value
    .split(",")
    .map((part) => part.trim())
    .find(Boolean) || "";

const getClientIp = (headersList: Headers) =>
  getHeaderString(headersList, "cf-connecting-ip") ||
  getFirstForwardedIp(getHeaderString(headersList, "x-forwarded-for")) ||
  getFirstForwardedIp(getHeaderString(headersList, "x-vercel-forwarded-for")) ||
  getHeaderString(headersList, "x-real-ip") ||
  "Unknown";

const getSafeValue = (value: string, maxLength: number) =>
  validateString(value, maxLength) ? value : "Unknown";

const verifyTurnstileToken = async (token: string, ipAddress: string) => {
  const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("CLOUDFLARE_TURNSTILE_SECRET_KEY is not configured");
  }

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);

  if (ipAddress !== "Unknown") {
    body.append("remoteip", ipAddress);
  }

  const response = await fetch(turnstileVerifyUrl, {
    method: "POST",
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to verify Turnstile token");
  }

  return (await response.json()) as TurnstileVerifyResponse;
};

export const sendEmail = async (formData: FormData) => {
  const headersList = await headers();
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const turnstileToken = getFormString(formData, "cf-turnstile-response");
  const ipAddress = getClientIp(headersList);
  const userAgent = getHeaderString(headersList, "user-agent");
  const submissionDetails: SubmissionDetails = {
    ipAddress,
    browserInfo: getSafeValue(getFormString(formData, "browserInfo"), 800),
    userAgent: getSafeValue(userAgent, 1000),
    userTimeZone: getSafeValue(getFormString(formData, "userTimeZone"), 100),
    userLocalTime: getSafeValue(getFormString(formData, "userLocalTime"), 200),
    serverReceivedAt: new Date().toISOString(),
  };

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(turnstileToken, 2048)) {
    return {
      error: "Please complete the security check.",
    };
  }

  let data;
  try {
    const turnstileResult = await verifyTurnstileToken(
      turnstileToken,
      ipAddress
    );

    if (!turnstileResult.success) {
      return {
        error: "Security verification failed. Please try again.",
      };
    }

    const email = process.env.EMAIL;

    if (!email) {
      throw new Error("EMAIL is not configured");
    }

    data = await getResend().emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: email,
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        submissionDetails,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
