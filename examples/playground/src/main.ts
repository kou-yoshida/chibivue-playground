import { createApp, h } from "chibivue";

const app = createApp({
  render: () =>
    h("div", {}, [
      h("p", {}, ["Hello world."]),
      h("button", {}, ["click me!"]),
    ]),
});

app.mount("#app");
