module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFiles: ["jest-canvas-mock"],
  testTimeout: 1000 * 60,
};
