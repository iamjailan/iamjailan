import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  submissionDetails: {
    ipAddress: string;
    browserInfo: string;
    userAgent: string;
    userTimeZone: string;
    userLocalTime: string;
    serverReceivedAt: string;
  };
};

export default function ContactFormEmail({
  message,
  senderEmail,
  submissionDetails,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
              <Hr />
              <Heading as="h2" className="text-lg leading-tight">
                Submission details
              </Heading>
              <Text>IP address: {submissionDetails.ipAddress}</Text>
              <Text>Browser: {submissionDetails.browserInfo}</Text>
              <Text>User agent: {submissionDetails.userAgent}</Text>
              <Text>Local time zone: {submissionDetails.userTimeZone}</Text>
              <Text>Local send time: {submissionDetails.userLocalTime}</Text>
              <Text>
                Server received time: {submissionDetails.serverReceivedAt}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
