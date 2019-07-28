import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { GetNews } from "../../api/index";
@inject('store')
@observer
class Managers extends Component {
  @observable News = [];
  constructor(props) {
    super(props);
    GetNews().then(e => { this.News = e.data; }).catch(console.log);
  }
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
              <div className="row">
                <div className="col-sm-12">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>Họ Tên</th>
                        <th>SDT</th>
                        <th>Địa Chỉ</th>
                        <th>Email</th>
                        <th>Username</th>
                        <tr></tr>
                        <tr><button type="button" class="btn btn-primary" onClick={() => { this.goToAdmin("Thêm Quản Lý", "/addmanager") }}>Thêm</button></tr>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Phan Anh Quân</td>
                        <td>0386451313</td>
                        <td>HÀ Nội Việt Nam</td>
                        <td>Gquan1402@gmail.com</td>
                        <td>Quandz</td>
                        <td><button type="button" class="btn btn-primary">Sửa</button></td>
                        <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                          Xoá</button></td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Bạn có muốn xoá không!</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
                          <button type="button" class="btn btn-primary" onClick={() => { this.props.store.tempAlert("Đã xoá thành công!", 1000); }} data-dismiss="modal">Xoá</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Managers;