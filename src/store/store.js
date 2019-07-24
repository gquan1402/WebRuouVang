import { action, observable } from "mobx";


let store = null;

class Store {
  @observable Product = "";


  constructor(obj) {
    const self = this;
  }

  route = () => {
    // history.push("/news");
  };

  @action
  initApp = async () => { };
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
