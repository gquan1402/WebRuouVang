import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { editAdmin } from "../../api/index";
import { Redirect } from 'react-router';
@inject('store')
@observer
class EditAdmin extends Component {
  @observable item = "";
  constructor(props) {
    super(props);
    this.item = this.props.store.admin;
  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  addProduct = async () => {
    await editAdmin(this.item.admin_name, this.item.admin_phone, this.item.admin_email, this.item.admin_address, this.item.admin_password, this.item.admin_username, this.item.id).then(this.props.store.tempAlert("Sửa thành công!", 1000)).catch(console.log);
    await this.goToAdmin("Managers", "/managers");
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
                      <div className="item-contact">
                        <label for="mail">Tên Quản Lý</label>
                        <input type="mail" className="form-control" id="mail" required onChange={e => {
                          this.item.admin_name = e.target.value;
                        }} value={this.item.admin_name} />
                      </div>
                      <div className="item-contact">
                        <label for="sdt">Số Điện Thoại</label>
                        <input type="number" className="form-control" id="sdt" onChange={e => {
                          this.item.admin_phone = e.target.value;
                        }} value={this.item.admin_phone} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Địa Chỉ</label>
                        <input type="text" className="form-control" id="dia-chi" onChange={e => {
                          this.item.admin_address = e.target.value;
                        }} value={this.item.admin_address} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Email</label>
                        <input type="text" className="form-control" id="dia-chi" onChange={e => {
                          this.item.admin_email = e.target.value;
                        }} value={this.item.admin_email} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Username</label>
                        <input type="text" className="form-control" id="dia-chi" onChange={e => {
                          this.item.admin_username = e.target.value;
                        }} value={this.item.admin_username} />
                      </div>
                      <div className="item-contact">
                        <label for="dia-chi">Passwords</label>
                        <input type="text" className="form-control" id="dia-chi" onChange={e => {
                          this.item.admin_password = e.target.value;
                        }} value={this.item.admin_password} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4"><button type="button" class="btn btn-outline-success btn-lg" onClick={() => { this.addProduct() }}>Sửa quản lý</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      );

  }
}

export default EditAdmin;
