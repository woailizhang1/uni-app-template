import { defineConfig } from "vite";
import { resolve } from "path";

import uni from "@dcloudio/vite-plugin-uni";
import DefineOptions from "unplugin-vue-define-options/vite";
import AutoImport from "unplugin-auto-import/vite";
import PiniaAutoRefs from "pinia-auto-refs";
import { UnifiedViteWeappTailwindcssPlugin as uvtw } from "weapp-tailwindcss/vite";
import rem2px from "postcss-rem-to-responsive-pixel";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const isH5 = process.env.UNI_PLATFORM === "h5";
const isApp = process.env.UNI_PLATFORM === "app";
const WeappTailwindcssDisabled = isH5 || isApp;

const postcssPlugins = [tailwindcss(), autoprefixer()];

if (!WeappTailwindcssDisabled) {
  postcssPlugins.push(
    rem2px({
      rootValue: 32,
      propList: ["*"],
      transformUnit: "rpx",
    }),
  );
}

export default defineConfig({
  plugins: [
    uni(),
    uvtw({
      disabled: WeappTailwindcssDisabled,
    }),
    AutoImport({
      imports: ["vue", "uni-app"],
      dts: "./src/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
      },
    }),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      "/@": resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/vars.scss";`,
      },
    },
  },
});
