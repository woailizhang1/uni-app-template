import piniaPersist from "pinia-plugin-persist-uni";
import { createPinia } from "pinia";
const pinia = createPinia();
pinia.use(piniaPersist);
export default pinia;
// export * from "./modules/user";
