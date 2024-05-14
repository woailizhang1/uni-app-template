import { defineStore } from "pinia";
interface BasicState {
  defaultTheme: string;
}
export const useBasicStore = defineStore("basic", {
  state: (): BasicState => ({
    defaultTheme: "black",
  }),
});
