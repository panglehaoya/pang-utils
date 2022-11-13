import { Vuepress } from "@vuepress/client";

const routeItems = [
  ["v-8daa1a0e", "/", { title: "" }, ["/index.html", "/README.md"]],
  [
    "v-9655bafa",
    "/views/Hooks.html",
    { title: "Hooks" },
    ["/views/Hooks", "/views/Hooks.md"],
  ],
  [
    "v-59558e10",
    "/views/Install.html",
    { title: "安装使用" },
    ["/views/Install", "/views/Install.md"],
  ],
  [
    "v-70f58bbc",
    "/views/Utils.html",
    { title: "Utils" },
    ["/views/Utils", "/views/Utils.md"],
  ],
  [
    "v-89f8c5a2",
    "/views/WaterMark.html",
    { title: "水印" },
    ["/views/WaterMark", "/views/WaterMark.md"],
  ],
  [
    "v-5e8f6fcc",
    "/views/Websocket.html",
    { title: "Websocket" },
    ["/views/Websocket", "/views/Websocket.md"],
  ],
  ["v-3706649a", "/404.html", { title: "" }, ["/404"]],
];

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    },
  ]
);
