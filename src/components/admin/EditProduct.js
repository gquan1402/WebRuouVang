import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
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
  render() {
    return (
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
                      <input type="text" className="form-control" id="ho-ten" required placeholder={this.item._id}
                      />
                    </div>
                    <div className="item-contact">
                      <label for="mail">Tên SP</label>
                      <input type="mail" className="form-control" id="mail" required placeholder={this.item.product_name} />
                    </div>
                    <div className="item-contact">
                      <label for="sdt">Link ảnh</label>
                      <input type="number" className="form-control" id="sdt" placeholder={this.item.product_image} />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Đơn Giá</label>
                      <input type="text" className="form-control" id="dia-chi" placeholder={this.item.product_cost} />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Dung tích</label>
                      <input type="text" className="form-control" id="dia-chi" placeholder={this.item.product_capacity} />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Nông độ</label>
                      <input type="text" className="form-control" id="dia-chi" placeholder={this.item.product_concentration} />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Nhiệt Độ Bảo Quản</label>
                      <input type="text" className="form-control" id="dia-chi" placeholder={this.item.product_temperature} />
                    </div>
                    <div className="item-contact">
                      <label for="request" className="request">
                        Mô Tả:
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="request"
                        placeholder={this.item.product_describe}
                        rows="5"
                        required
                      />
                    </div>
                  </div>
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
