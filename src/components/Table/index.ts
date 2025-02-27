import { App as Application } from "vue";
import DataTable from "./Table.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, DataTable);
  }
};

export default Plugin;

export { DataTable };