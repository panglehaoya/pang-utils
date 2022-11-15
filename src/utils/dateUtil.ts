import type { ManipulateType } from "dayjs";
import dayjs from "dayjs";

export function formatDate(date: number | Date, format: string): string {
  return dayjs(date).format(format);
}

/**
 * 日期操作
 * @param type
 * @param num
 * @param manipulateType
 * @param format
 * @param date
 */
export function handleDate(
  type: "subtract" | "add",
  num: number,
  manipulateType: ManipulateType,
  date: number | Date,
  format: string
): string {
  if (type === "subtract") {
    const newDate: any = dayjs(date).subtract(num, manipulateType);
    return dayjs(newDate.$d).format(format);
  } else if (type === "add") {
    const newDate: any = dayjs(date).add(num, manipulateType);
    return dayjs(newDate.$d).format(format);
  }
}

/**
 *
 * @param time1
 * @param time2
 * @param zh
 */
export const getTimeDuration = (time1, time2, zh: "zh" | "en" = "zh") => {
  const language = zh;
  let finalStr = "";
  const duration = time2 - time1;
  const days = Math.floor(duration / (24 * 3600 * 1000));
  const leave1 = duration % (24 * 3600 * 1000);
  const hours = Math.floor(leave1 / (3600 * 1000));
  const leave2 = leave1 % (3600 * 1000);
  const minutes = Math.floor(leave2 / (60 * 1000));
  const leave3 = leave2 % (60 * 1000);
  const seconds = Math.round(leave3 / 1000);
  const dateSymbol = language === "zh" ? "天" : "d";
  const hourSymbol = language === "zh" ? "小时" : "h";
  const minutesSymbol = language === "zh" ? "分" : "m";
  const dayStr = days ? `${days}${dateSymbol}` : "";
  const hourStr = hours ? `${hours}${hourSymbol}` : "";
  const minuteStr = minutes ? `${minutes}${minutesSymbol}` : "";

  if (days && !hours && minutes) {
    finalStr = `${dayStr}${hours}${hourSymbol}${minuteStr}`;
  } else {
    finalStr = `${dayStr}${hourStr}${minuteStr}`;
  }

  return finalStr;
};
