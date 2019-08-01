import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
import { editProducts } from "../../api/index";
import { Redirect } from 'react-router';
@inject('store')
@observer
class EditProduct extends Component {
  @observable item = "";
  constructor(props) {
    super(props);
    this.item = this.props.store.Product;
  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  addProduct = async () => {
    if (this.item.category_id != "" && this.item.product_capacity != "" && this.item.product_concentration != "" && this.item.product_cost != "" && this.item.product_describe != "" && this.item.product_image != "" & this.item.product_name != "" && this.item.product_temperature != "") {
      await editProducts(
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
        this.item.supplier_id,
        this.item._id
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
                      <div className="item-contact">
                        <label for="ho-ten">Mã Sản Phẩm</label>
                        <input type="text" className="form-control" id="ho-ten" required value={this.item._id}
                        />
                      </div>
                      <div className="item-contact">
                        <label for="mail">Tên SP</label>
                        <input type="mail" className="form-control" id="mail" required value={this.item.product_name} onChange={e => {
                          this.item.product_name = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="sdt">Link ảnh</label>
                        <input type="number" className="form-control" id="sdt" value={this.item.product_image} onChange={e => {
                          this.item.product_image = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Đơn Giá</label>
                        <input type="text" className="form-control" id="dia-chi" value={this.item.product_cost} onChange={e => {
                          this.item.product_cost = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Dung tích</label>
                        <input type="text" className="form-control" id="dia-chi" value={this.item.product_capacity} onChange={e => {
                          this.item.product_capacity = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Nông độ</label>
                        <input type="text" className="form-control" id="dia-chi" value={this.item.product_concentration} onChange={e => {
                          this.item.product_concentration = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Nhiệt Độ Bảo Quản</label>
                        <input type="text" className="form-control" id="dia-chi" value={this.item.product_temperature} onChange={e => {
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
                          value={this.item.product_describe}
                          rows="5"
                          required
                          onChange={e => {
                            this.item.product_describe = e.target.value;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4"><button type="button" class="btn btn-outline-success btn-lg" onClick={() => { this.addProduct() }}>Cập nhật</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      );

  }
}

export default EditProduct;
