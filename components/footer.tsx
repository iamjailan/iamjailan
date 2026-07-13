import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { formatCalendarYear } from "@/lib/locale-format";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const locale = await getLocale();
  const year = formatCalendarYear(new Date().getFullYear(), locale);

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {t("copyright", { year })}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t("about")}</span> {t("builtWith")}
      </p>
    </footer>
  );
}
