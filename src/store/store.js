import { action, observable } from "mobx";


let store = null;

class Store {
  @observable Product = "";
  @observable mesage = "";
  @observable id = "";
  @observable idname = "";
  @observable cart = [];
  constructor(obj) {
    const self = this;
  }

  route = () => {
    // history.push("/news");
  };
  @action
  onAddToCart = (item, quantity) => {


    const newCart = [...this.cart];

    const index = this.findInCart(item, this.cart);

    if (index !== -1) {
      newCart[index].quantity += 1;
      this.cart = newCart;
    }
    else {
      newCart.push({ item: item, quantity: quantity });
      this.cart = [...newCart];
    }
    this.tempAlert("Thêm sản phẩm thành công!", 1000);
  }
  @action
  tempAlert(msg, duration) {
    var el = document.createElement("div");
    el.setAttribute("style", "position: fixed;top:50%;left:45%;background-color:#cce5ff;font-size:20px;color:#004085;");
    el.innerHTML = msg;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
  }
  @action
  findInCart = (ib, c) => {
    return c.findIndex(e => e.item._id === ib._id);
  }
  @action
  onDeleteCartItem = (item) => {
    const index = this.findInCart(item, this.cart);
    this.cart.splice(index, 1);
    this.tempAlert("Đã xoá một sản phẩm!", 1000);
  }
  @action
  onChangeQuantity = (item, quantity) => {
    const index = this.findInCart(item, this.cart);
    if (quantity > 0) {
      this.cart[index].quantity += quantity;

    }
    else {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity += quantity;
      }
    }
    this.mesage = 'Cập nhật giỏ hàng thành công';
  }
  @action
  onBill = () => {
    this.tempAlert("Đặt hàng thành công!", 2000);
    this.cart = [];
  }
  @action
  initApp = async () => { };
}
export default new Store();