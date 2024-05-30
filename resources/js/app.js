import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";
import AppComponent from "./components/App.vue";
import "../css/app.css";

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

createApp(AppComponent)
    .use(pinia)
    .use(router)
    .mount("#app");
