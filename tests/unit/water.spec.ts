import { WaterMark } from "../../src/utils";

describe("WaterMark", () => {
  it("setWaterMark", () => {
    const waterMark = new WaterMark();
    waterMark.setWaterMark({ text: "pang-utils" });
    const body = document.querySelector("body");

    expect(body.querySelectorAll("#mask").length).toBe(1);
  });
});
