import { CodeTabs } from "C:/Users/Administrator/Desktop/my docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_460cf8cdee2722fa0ea466892c143a46/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/Administrator/Desktop/my docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_460cf8cdee2722fa0ea466892c143a46/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/Administrator/Desktop/my docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_460cf8cdee2722fa0ea466892c143a46/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
