module.exports = {
  "*.{js,jsx,vue}": [
    "vue-cli-service lint ./src --fix",
    "prettier --write ./src",
    "git add",
  ],
};
