const { defaultTheme } = require("vuepress");
const navbar = require("./config/navbar");
const sidebar = require("./config/sidebar");

module.exports = {
  title: "pang-utils",
  description: "vue常用函数库",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/logo.jpg" }], // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  markdown: { code: { lineNumbers: false } },
  theme: defaultTheme({
    navbar,
    sidebar,
  }),
};
