import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
import { AddProducts } from "../../api/index";
import { Redirect } from 'react-router';
@inject('store')
@observer
class AddProduct extends Component {
  @observable item =
    {
      Sale_id: "5d22214bfb6fc00e79b61f07",
      category_id: "5d2295abe7179a4e432eceed",
      product_capacity: "",
      product_concentration: "",
      product_cost: "",
      product_cost_unit: "usd",
      product_describe: "",
      product_image: "",
      product_name: "",
      product_temperature: "",
      supplier_id: "5d22a41ce7179a4e432ed1c1",
    }
    ;
  constructor(props) {
    super(props);
  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  addProduct = async () => {
    if (this.item.category_id != "" && this.item.product_capacity != "" && this.item.product_concentration != "" && this.item.product_cost != "" && this.item.product_describe != "" && this.item.product_image != "" & this.item.product_name != "" && this.item.product_temperature != "") {
      await AddProducts(
        this.item.product_name,
        this.item.product_cost,
        this.item.product_capacity,
        this.item.product_concentration,
        this.item.product_cost_unit,
        this.item.product_image,
        this.item.product_describe,
        this.item.product_temperature,
        this.item.Sale_id,
        this.item.category_id,
        this.item.supplier_id
      ).then(this.props.store.tempAlert("Thành công!", 1000)).catch(console.log);
      await this.goToAdmin("Sản Phẩm", "/productAdmin");
    }
    else {
      this.props.store.tempAlert("Bạn cần nhập đủ thông tin!", 1000);
    }

  }
  render() {
    return localStorage.check != "true" ? (
      <Redirect push to="/" />
    ) : (
        <div id="contact" className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title_name">
                  <h4>{this.props.store.title}</h4>
                </div>
              </div>
            </div>
            <div className="row tt-lienhe">
              <div className="col-sm-4 ">
                <div className="sidebar">
                  <div className="sb_item">
                    <h4>Danh mục</h4>
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Hoá Đơn", "/Admin") }}>Hoá Đơn</li>
                    </ul>
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Sản Phẩm", "/productAdmin") }}>Sản Phẩm</li>
                    </ul>
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Tin Tức", "/newsAdmin") }}>Tin Tức</li>
                    </ul>
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Sales", "/SalesAdmin") }}>Sales</li>
                    </ul>
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Managers", "/managers") }}>Quản lý</li>
                    </ul>
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.props.history.push("/"); localStorage.check = "false" }}>Đăng xuất</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <form
                  className="form-group form-contact"
                  role="form"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <div class="item-contact">
                        <label for="exampleFormControlSelect1">Chọn loại sản phẩm</label>
                        <select class="form-control" id="exampleFormControlSelect1" onChange={e => {
                          this.item.category_id = e.target.value;
                        }} >
                          <option value="5d2295abe7179a4e432eceed">Vang Pháp</option>
                          <option value="5d2297f7e7179a4e432ecf7e">Vang Ý</option>
                          <option value="5d229809e7179a4e432ecf80">Vang Chile</option>
                          <option value="5d22981be7179a4e432ecf81">Vang Tây Ban nha</option>
                          <option value="5d229827e7179a4e432ecf83">Vang Mỹ</option>
                        </select>
                      </div>
                      <div className="item-contact">
                        <label for="mail">Tên SP</label>
                        <input type="mail" className="form-control" id="mail" required onChange={e => {
                          this.item.product_name = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="sdt">Link ảnh</label>
                        <input type="text" className="form-control" id="sdt" onChange={e => {
                          this.item.product_image = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Đơn Giá</label>
                        <input type="text" className="form-control" id="dia-chi" onChange={e => {
                          this.item.product_cost = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Dung tích</label>
                        <input type="text" className="form-control" id="dia-chi" onChange={e => {
                          this.item.product_capacity = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Nông độ</label>
                        <input type="text" className="form-control" id="dia-chi" onChange={e => {
                          this.item.product_concentration = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Nhiệt Độ Bảo Quản</label>
                        <input type="text" className="form-control" id="dia-chi" onChange={e => {
                          this.item.product_temperature = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="request" className="request">
                          Mô Tả:
                    </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="request"
                          onChange={e => {
                            this.item.product_describe = e.target.value;
                          }}
                          rows="5"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4"><button type="button" class="btn btn-outline-success" onClick={() => { this.addProduct() }}>Thêm sản phẩm</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      );
  }
}

export default AddProduct;
