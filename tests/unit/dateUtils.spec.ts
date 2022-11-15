import { formatDate, handleDate, getTimeDuration } from "../../src/utils";

describe("dateUtils", () => {
  it("formatDate", () => {
    const date = new Date(2022, 1, 2);
    const format = formatDate(date, "YYYY-MM-DD");

    expect(format).toBe("2022-02-02");
  });

  it("handleDate", () => {
    const date = new Date(2022, 2, 2);
    const dateAdd = handleDate("add", 1, "day", date, "YYYY-MM-DD");
    const dateSub = handleDate("subtract", 1, "day", date, "YYYY-MM-DD");
    console.log(dateAdd);
    expect(dateAdd).toBe("2022-03-03");
    expect(dateSub).toBe("2022-03-01");
  });

  it("getTimeDuration", () => {
    const date1 = new Date(2022, 2, 2, 11, 10);
    const date2 = new Date(2022, 3, 15, 13, 1);

    expect(getTimeDuration(date1, date2)).toBe("44天1小时51分");
  });
});
