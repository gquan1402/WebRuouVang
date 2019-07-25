import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
@inject('store')
@observer
class Admin extends Component {
  @observable data = {
    email: '',
    password: ''
  };
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
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
                    <li>Hoá Đơn</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToAdmin("Sản Phẩm", "/productAdmin") }}>Sản Phẩm</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToAdmin("Tin Tức", "/newsAdmin") }}>Tin Tức</li>
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
                    <table class="table">
                      <tr>
                        <td>Họ Tên</td>
                        <td>SDT</td>
                        <td>Địa Chỉ</td>
                        <td>Email</td>
                      </tr>
                      <tr className="pt-3">
                        <h3>1</h3>
                      </tr>
                      <tr>
                        <td>Phan Anh Quân</td>
                        <td>0386451313</td>
                        <td>HÀ Nội Việt Nam</td>
                        <td>Gquan1402@gmail.com</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td><img style={{ height: "50px", width: "50px", marginLeft: "auto", marginRight: "auto" }}
                          src="../../../images/discount1.jpeg " className="img-responsive text-center"
                          alt="" /></td>
                        <td>
                          Vang Đà Lạt</td>
                        <td className="text-danger">600<u>USD</u></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td><button type="button" class="btn btn-success">Hoàn Thành</button></td>
                        <td><button type="button" class="btn btn-danger">Xoá</button></td>

                      </tr>
                    </table>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
