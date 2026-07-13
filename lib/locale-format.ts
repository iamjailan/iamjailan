const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"] as const;

export type YearMonth = {
  year: number;
  month: number; // 1-12
};

export function usesPersianLocale(locale: string): boolean {
  return locale === "fa" || locale === "ps";
}

/** Convert ASCII digits to Persian digits for fa/ps. */
export function toLocaleDigits(value: string | number, locale: string): string {
  const str = String(value);
  if (!usesPersianLocale(locale)) return str;
  return str.replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)] ?? digit);
}

function persianDateFormatter(options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("fa-AF-u-ca-persian-nu-arabext", options);
}

function gregorianDateFormatter(options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-US", options);
}

/** Format a Gregorian year+month for display (Jalali for fa/ps). */
export function formatMonthYear(
  { year, month }: YearMonth,
  locale: string,
): string {
  const date = new Date(year, month - 1, 1);

  if (usesPersianLocale(locale)) {
    return persianDateFormatter({
      year: "numeric",
      month: "long",
    }).format(date);
  }

  return gregorianDateFormatter({
    year: "numeric",
    month: "short",
  }).format(date);
}

/** Format a Gregorian calendar year (Jalali year for fa/ps). */
export function formatCalendarYear(year: number, locale: string): string {
  if (usesPersianLocale(locale)) {
    // Use mid-year to avoid edge cases around Nowruz for single-year labels
    return persianDateFormatter({ year: "numeric" }).format(
      new Date(year, 5, 15),
    );
  }
  return String(year);
}

/** Format project year or year range. */
export function formatProjectYear(
  year: number | { start: number; end: number },
  locale: string,
): string {
  if (typeof year === "number") {
    return formatCalendarYear(year, locale);
  }

  const start = formatCalendarYear(year.start, locale);
  const end = formatCalendarYear(year.end, locale);
  return start === end ? start : `${start} – ${end}`;
}

/** Format experience date range, including "present". */
export function formatExperienceDate(
  start: YearMonth | null,
  end: YearMonth | "present" | null,
  locale: string,
  presentLabel: string,
): string {
  if (end === "present" || (!start && !end)) {
    return presentLabel;
  }

  if (start && end && typeof end === "object") {
    return `${formatMonthYear(start, locale)} – ${formatMonthYear(end, locale)}`;
  }

  if (start) {
    return formatMonthYear(start, locale);
  }

  return presentLabel;
}
