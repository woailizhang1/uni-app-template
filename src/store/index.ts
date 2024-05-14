import type { App } from "vue";

// import piniaPersist from "pinia-plugin-persist-uni";
import { createPinia } from "pinia";
const store = createPinia();

export function setupStore(app: App<Element>) {
    // store.use(piniaPersist);
    app.use(store);
}
export { store };
