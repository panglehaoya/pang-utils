import {
  validURL,
  validLowerCase,
  validUpperCase,
  validAlphabets,
  isObject,
  isEmpty,
} from "../../src/utils";

describe("valid", () => {
  it("validURL", () => {
    const url = "https://github.com/panglehaoya/pang-utils";

    expect(validURL(url)).toBe(true);
  });

  it("validLowerCase", () => {
    const str = "abc";
    const upperStr = "Abc";

    expect(validLowerCase(str)).toBe(true);
    expect(validLowerCase(upperStr)).toBe(false);
  });

  it("validUpperCase", () => {
    const str = "ABC";
    const lowerStr = "ABc";

    expect(validUpperCase(str)).toBe(true);
    expect(validUpperCase(lowerStr)).toBe(false);
  });

  it("validAlphabets", () => {
    const str = "123";
    const str1 = "AbC";

    expect(validAlphabets(str)).toBe(false);
    expect(validAlphabets(str1)).toBe(true);
  });

  it("isObject", () => {
    const obj = {};

    expect(isObject(obj)).toBe(true);
  });

  it("isEmpty", () => {
    const str = "";
    const arr = [];
    const map = new Map();
    const set = new Set();
    const obj = {};

    expect(isEmpty(str)).toBe(true);
    expect(isEmpty(arr)).toBe(true);
    expect(isEmpty(map)).toBe(true);
    expect(isEmpty(set)).toBe(true);
    expect(isEmpty(obj)).toBe(true);
  });
});
