import { action, observable, observe } from "mobx";
import Promise from "bluebird";

import Config from "../config/env";

let store = null;

class Store {
  @observable isServer = false;
  @observable isRender = false;
  @observable token = "";
  @observable crtCampaign = "";

  constructor(obj) {
    const self = this;
  }

  route = () => {
    // history.push("/news");
  };

  @action
  initApp = async () => {};
}
export default new Store();
// export function initializeStore(obj) {
//   if (obj.isServer) {
//     return new Store(obj);
//   } else {
//     if (store === null) {
//       store = new Store(obj);
//     }
//     return store;
//   }
// }
