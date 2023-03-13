import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { translate } from './i18n.js';

import "./assets/style/main.scss";
import ShoelaceModelDirective from "@shoelace-style/vue-sl-model";

const app = createApp(App);

app.use(router);
app.use(ShoelaceModelDirective);

app.directive(`tr`, {
    created(el, binding) {
        const value = binding.value ? binding.value : el.innerHTML;

        const translation = translate(value);
        if (binding.value && binding.arg) {
            el.setAttribute(binding.arg, translation);
        } else {
            el.innerHTML = translation;
        }
    }
});

app.mount("#app");
