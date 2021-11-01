import { createApp } from "vue";
import router from "./router";
import store from "./store/index";

import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";

// Lazy loading the BaseDialog component (asynchronous component)
// https://v3.vuejs.org/guide/migration/async-components.html#async-components
// const BaseDialog = defineAsyncComponent("./components/ui/BaseDialog.vue");

import App from "./App.vue";
const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.use(router);
app.use(store);
app.mount("#app");
