import { defineStore } from "pinia";

interface State {
    mode: "login" | "signup";
}

const authStore = defineStore("auth", {
    state: (): State => ({
        mode: "login",
    }),
    getters: {},
    actions: {
        toggleMode() {
            this.mode = this.mode === "login" ? "signup" : "login";
        }
    }
})

export default authStore;