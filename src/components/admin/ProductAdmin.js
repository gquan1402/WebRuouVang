import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
import { GetProducts } from '../../api/index';
import { deleteProduct } from '../../api/index';
import { Redirect } from 'react-router';
@inject('store')
@observer
class ProductAdmin extends Component {
  @observable Products = [];
  @observable id = "";
  @observable msp = "";
  constructor(props) {
    super(props);
    GetProducts().then(e => { this.Products = e.data; }).catch(console.log);

  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  goToProduct(e) {
    this.props.store.Product = e;
    this.props.history.push('/editProduct');
  }
  ondelete = async (e) => {
    await deleteProduct(e).then(this.props.store.tempAlert("Xoá thành công!", 1000)).catch(console.log);
    await window.location.reload();
  }
  check = async () => {
    let FindProduct = [];
    for (let i = 0; i < this.Products.length; i++) {
      if (this.Products[i]._id === this.msp) {
        FindProduct.push(this.Products[i]);
      }
    }
    this.Products = FindProduct;
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
                      <li>Sản Phẩm</li>
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
                <div className="row pb-5">
                  <div className="col-sm- 8"></div>
                  <div className="col-sm-4">
                    <input className="form-control" type="text" placeholder="Tìm kiếm theo mã sản phẩm" onChange={e => {
                      this.msp = e.target.value;
                    }} />
                    <button type="button" className="btn btn-outline-info" onClick={() => this.check()}>Search</button>
                  </div>
                </div>
                <form
                  className="form-group form-contact"
                  role="form"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <table class="table">
                        <thead>
                          <tr>
                            <td>Mã SP</td>
                            <td>Tên SP</td>
                            <td>Đơn Giá</td>
                            <td>Số Lượng</td>
                            <td></td>
                            <td><button type="button" class="btn btn-primary" onClick={() => { this.goToAdmin("Thêm Sản Phẩm", "/addproduct") }}>Thêm</button></td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.Products.map((e, index) => {
                            return (<tr key={index}>
                              <td>{e._id}</td>
                              <td>{e.product_name}</td>
                              <td>{e.product_cost}</td>
                              <td>20</td>
                              <td><button type="button" class="btn btn-primary" onClick={() => { this.goToProduct(e) }}>Sửa</button></td>
                              <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onClick={() => this.id = e._id}>
                                Xoá</button></td>
                            </tr>)
                          })}
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
                              <button type="button" class="btn btn-primary" onClick={() => this.ondelete(this.id)} data-dismiss="modal">Xoá</button>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ProductAdmin;
