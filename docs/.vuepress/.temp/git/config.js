import { GitContributors } from "C:/Users/Administrator/Desktop/my docs/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_cf4fac640d156994a14f037fa154f59d/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/Administrator/Desktop/my docs/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_cf4fac640d156994a14f037fa154f59d/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
