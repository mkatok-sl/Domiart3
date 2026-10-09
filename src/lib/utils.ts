import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const uah = new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 0 });

/** 29999 -> "29 999 ₴" (non-breaking space before the sign). */
export function formatUAH(value: number): string {
  return `${uah.format(value)}\u00A0₴`;
}

/** 4.6 -> "4.6" — one decimal, dot separator to match rating badges. */
export function formatRating(value: number): string {
  return value.toFixed(1);
}

/** ISO date -> "9 жовтня 2026". */
export function formatDateUk(iso: string): string {
  return new Intl.DateTimeFormat("uk-UA", { day: "numeric", month: "long", year: "numeric" })
    .format(new Date(`${iso}T12:00:00`))
    .replace(/\s?р\.$/, "");
}
