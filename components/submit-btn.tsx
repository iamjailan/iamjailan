import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";

type SubmitBtnProps = {
  disabled?: boolean;
};

export default function SubmitBtn({ disabled = false }: SubmitBtnProps) {
  const { pending } = useFormStatus();
  const t = useTranslations("Contact");

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:text-black dark:hover:bg-white/90 disabled:scale-100 disabled:bg-gray-300 dark:disabled:bg-white/60"
      disabled={pending || disabled}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black"></div>
      ) : (
        <>
          {t("submit")}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1" />{" "}
        </>
      )}
    </button>
  );
}
