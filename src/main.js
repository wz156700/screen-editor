import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import "./assets/icon/icon";
import "./assets/style/theme/dark.css";
import EditorIcon from "@/components/icon/index.vue";
import { indexDBAdd, indexDBSearchAll, indexDBRemove, indexDBUpdata, indexDBSearch } from "./indexDb/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/style/theme/dark-element.css";

import EchartsDom from "./components/echarts/index";
import APBorder from "./components/border/index";
import Maps from './components/map/index';
import Customs from './components/custom/index';



import DataV from "./components/datav/index";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.config.globalProperties = {
    indexDBAdd,
    indexDBSearchAll,
    indexDBRemove,
    indexDBUpdata,
    indexDBSearch,
};
app.use(router).use(pinia).use(ElementPlus).use(EchartsDom).use(APBorder).use(Customs).use(Maps).use(DataV).component("EditorIcon", EditorIcon).mount("#app");
