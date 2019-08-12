import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
import {AddBill} from "../../api/index";
@inject('store')
@observer
class Cart extends Component {
  @observable data = {
    name:"",
    email: "",
    phone:"",
    address:""
  };
  showTotal = (cart) => {
    var total = 0;
    if (cart.length > 0) {
        for(var i = 0;i< cart.length;i++){
            total += cart[i].item.product_cost * cart[i].quantity;
        }
    }
    return total;
}
  goToProductId(id, name) {
  this.props.store.id = id;
  this.props.store.idname = name;
  this.props.history.push('/productId');
}
  onBill = ()=>{
    let cost = this.showTotal(this.props.store.cart);
    let a = this.props.store.cart.map(e => {
      let b = {
        product_cost:e.item.product_cost,
        product_image:e.item.product_image,
        product_name:e.item.product_name,
        product_quantity:e.quantity,
      }
      return b
    })
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    if(this.data.name !="" && this.data.phone !="" && this.data.email !=""  && this.data.address !="" ){
      AddBill(today,a,cost,"false",this.data.name,this.data.phone,this.data.email,this.data.address).then(this.ondone()).catch(console.log);
    }
  }
  ondone = async ()=>{
    this.props.store.cart = [];
    await this.props.store.tempAlert("Đặt hàng thành công!", 1000);
  }
  render() {
    return (
      <section id="cart">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title_page">
                <ul className="list-inline">
                  <li><a href="index.html">Trang chủ</a></li>
                  <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                  <li>Giỏ hàng</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row c_Detail">

            <div className="col-sm-9 col-sm-push-3">
              <form >
                <div className="table-responsive img_cart">
                  <table className="table table-bordered table-hover">
                    <tr>
                      <th style={{ width: "5%" }} className="text-center">STT</th>
                      <th style={{ width: "15%" }} className="text-center">Ảnh sản phẩm</th>
                      <th style={{ width: "25%" }} className="text-center">Tên sản phẩm</th>
                      <th style={{ width: "15%" }} className="text-center">Đơn giá</th>
                      <th style={{ width: "10%" }} className="text-center">Số lượng</th>
                      <th style={{ width: "15%" }} className="text-center">Thành tiền</th>
                      <th style={{ width: "5%" }} className="text-center">Xóa</th>
                    </tr>
                    {this.props.store.cart.map((e, index) => {
                      return (<tr key={index}>
                        <td>{index + 1}</td>
                        <td><img style={{ height: "50px", width: "50px", marginLeft: "auto", marginRight: "auto" }}
                          src={e.item.product_image} className="img-responsive text-center"
                          alt="" /></td>
                        <td>
                          {e.item.product_name} </td>
                        <td className="text-danger">{e.item.product_cost}<sup><u>USD</u></sup></td>
                        <td className="center-o-nsmall-only">
                                        <span className="qty">{e.quantity}</span>
                                        <div className="btn-group radio-group" data-toggle="buttons">
                                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                onClick={()=>this.props.store.onChangeQuantity(e.item,-1)}
                                                >
                                                <a>—</a>
                                            </label>
                                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                onClick={()=>this.props.store.onChangeQuantity(e.item,1)}
                                                >
                                                <a>+</a>
                                            </label>
                                        </div>
                                    </td>

                        <td className="text-danger">{e.item.product_cost * e.quantity}<sup><u>USD</u></sup></td>
                        <td>
                           <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item" onClick={()=>this.props.store.onDeleteCartItem(e.item)}>
                            X
                          </button>
                        </td>
                      </tr>)
                    })}



                    <tr className="end">
                      <td colspan="4">
                       
                      </td>
                      <td className="text-right">
                        Tổng cộng:
                    </td>
                      <td colspan="2" className="text-danger text-left">
                        <strong>{this.showTotal(this.props.store.cart)}<u> USD</u></strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </form>




              <div className="panel_container">
                <h3>Thông tin đặt hàng</h3>
                <p>Vui lòng điền đầy đủ và chính xác thông tin để chúng tôi hoàn thành đơn hàng!</p>
                <form className="form-horizontal" >
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input type="text" name="name" className="form-control"
                        placeholder="Họ và tên (Bắt buộc)" onChange={e => {
                          this.data.name = e.target.value;
                        }} />
                    </div>
                    <div className="col-sm-12" style={{ paddingTop: "7px" }}>
                      <input type="text" name="phone" min="0" className="form-control"
                        required="" placeholder="Điện thoại (Bắt buộc)" onChange={e => {
                          this.data.phone = e.target.value;
                        }} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input type="email" name="email" className="form-control"
                        required="" placeholder="Email (Bắt buộc)" onChange={e => {
                          this.data.email = e.target.value;
                        }} />
                    </div>
                    <div className="col-sm-12" style={{ paddingTop: "7px" }}>
                      <input type="text" name="address" className="form-control"
                        placeholder="Địa chỉ" onChange={e => {
                          this.data.address = e.target.value;
                        }} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <textarea type="text" className="form-control" name="Content" placeholder="Nội dung"
                        rows="5"></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <div type="submit" className="btn btn-button" onClick={()=>{this.onBill()}}>Đặt hàng</div>
                  </div>
                </form>
              </div>

            </div>

            <div className="col-sm-3 col-sm-pull-9">
              <div className="sidebar">
                <div className="sb_item">
                  <h4>Danh mục</h4>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToProductId("5d2295abe7179a4e432eceed", "Rượu Vang Pháp") }}>Rượu Vang Pháp</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToProductId("5d2297f7e7179a4e432ecf7e", "Rượu Vang Ý") }}>Rượu Vang Ý</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToProductId("5d229809e7179a4e432ecf80", "Rượu Vang Chile") }}>Rượu Vang Chile</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToProductId("5d22981be7179a4e432ecf81", "Rượu Vang Tây Ban Nha") }}>Rượu Vang Tây Ban Nha</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                  <li onClick={() => { this.goToProductId("5d229827e7179a4e432ecf83", "Rượu Vang Mỹ") }}>Rượu Vang Mỹ</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >
    );
  }
}

export default Cart;
