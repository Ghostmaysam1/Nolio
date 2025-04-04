import { defineStore } from "pinia";

interface State {
    mode: "login" | "signup";
    email: string;
    password: string
}

const authStore = defineStore("auth", {
    state: (): State => ({
        mode: "login",
        email: "",
        password: ""
    }),
    getters: {},
    actions: {
        toggleMode() {
            this.mode = this.mode === "login" ? "signup" : "login";
        }
    }
})

export default authStore;