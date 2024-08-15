import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/index.css";

const app = createApp(App);

app.use(router);

const enableMocking = async () => {
  if (import.meta.env.PROD) {
    return
  }

  const { worker } = await import("./mocks/browser")

  return worker.start({ onUnhandledRequest: "bypass" })
}

enableMocking().then(() => {
  app.mount("#app")
})

