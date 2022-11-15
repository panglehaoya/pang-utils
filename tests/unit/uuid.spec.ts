import { uuid } from "../../src/utils";

describe("uuid", () => {
  it("uuid length", () => {
    expect(uuid(10, 16).length).toBe(16);
  });
});
