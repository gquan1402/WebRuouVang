import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
@inject('store')
@observer
class AddManager extends Component {
  @observable item =
    {
      admin_name: "",
      admin_phone: "",
      admin_email: "",
      admin_address: "",
      admin_password: "",
      admin_username: ""
    };
  constructor(props) {
    super(props);
  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  addProduct = () => {
    if (this.item.admin_address != "" && this.item.admin_name != "" && this.item.admin_phone != "" && this.item.admin_email != "" && this.item.admin_password != "" && this.item.admin_username != "") {
      console.log(this.item);
      this.props.store.tempAlert("Thêm thành công!", 1000);
    }
    else {
      this.props.store.tempAlert("Bạn cần nhập đủ thông tin!", 1000);
      console.log(this.item);
    }
  }
  render() {
    return (
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
                      <label for="mail">Tên Quản Lý</label>
                      <input type="mail" className="form-control" id="mail" required onChange={e => {
                        this.item.admin_name = e.target.value;
                      }} />
                    </div>
                    <div className="item-contact">
                      <label for="sdt">Số Điện Thoại</label>
                      <input type="number" className="form-control" id="sdt" onChange={e => {
                        this.item.admin_phone = e.target.value;
                      }} />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Địa Chỉ</label>
                      <input type="text" className="form-control" id="dia-chi" onChange={e => {
                        this.item.admin_address = e.target.value;
                      }} />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Email</label>
                      <input type="text" className="form-control" id="dia-chi" onChange={e => {
                        this.item.admin_email = e.target.value;
                      }} />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Username</label>
                      <input type="text" className="form-control" id="dia-chi" onChange={e => {
                        this.item.admin_username = e.target.value;
                      }} />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Passwords</label>
                      <input type="text" className="form-control" id="dia-chi" onChange={e => {
                        this.item.admin_password = e.target.value;
                      }} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8"></div>
                  <div className="col-sm-4"><button type="button" class="btn btn-outline-success" onClick={() => { this.addProduct() }}>Thêm quản lý</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default AddManager;
