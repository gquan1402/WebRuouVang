import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
import { GetProducts } from '../../api/index';
@inject('store')
@observer
class ProductAdmin extends Component {
  @observable Products = [];
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
                    <li>Sản Phẩm</li>
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
                      <thead>
                        <tr>
                          <td>Mã SP</td>
                          <td>Tên SP</td>
                          <td>Đơn Giá</td>
                          <td>Số Lượng</td>
                          <td></td>
                          <td><button type="button" class="btn btn-primary">Thêm</button></td>
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
                            <td><button type="button" class="btn btn-danger">Xoá</button></td>
                          </tr>)
                        })}
                      </tbody>
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

export default ProductAdmin;
