import { createSSRApp } from "vue";
import App from "./App.vue";
import { setupStore } from "/@/store";
import VueI18n from "./locales/index";
export function createApp() {
  const app = createSSRApp(App);
  setupStore(app);
  app.use(VueI18n);
  return {
    app,
  };
}
