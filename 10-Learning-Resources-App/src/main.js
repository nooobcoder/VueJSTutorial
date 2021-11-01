import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import Button from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);
app.component("base-button", Button);

app.mount("#app");
