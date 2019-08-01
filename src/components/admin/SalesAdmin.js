import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { GetSales } from "../../api/index";
import { editSales } from "../../api/index";
import { Redirect } from 'react-router';
@inject('store')
@observer
class SalesAdmin extends Component {
  @observable Sales = [];
  @observable data = {
    id: "",
    sale_name: "",
    sale_discount: "",
    sale_dateBegin: "",
    sale_dateEnd: "",
    sale_status: ""
  };
  constructor(props) {
    super(props);
    GetSales().then(e => { this.Sales = e.data; }).catch(console.log);
  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  onSales = async () => {
    await editSales(this.Sales[0].sale_name, this.Sales[0].sale_discount, this.Sales[0].sale_dateBegin, this.Sales[0].sale_dateEnd, true)
      .then(this.props.store.tempAlert("Đã bật khuyến mại!", 1000))
      .catch(console.log);
    await window.location.reload();
  }
  offSales = async () => {
    await editSales(this.Sales[0].sale_name, this.Sales[0].sale_discount, this.Sales[0].sale_dateBegin, this.Sales[0].sale_dateEnd, false)
      .then(this.props.store.tempAlert("Đã tạm dừng khuyến mại!", 1000))
      .catch(console.log);
    await window.location.reload();
  }
  onEdit = async () => {
    await editSales(this.data.sale_name, this.data.sale_discount, this.data.sale_dateBegin, this.data.sale_dateEnd, this.Sales[0].sale_status)
      .then(this.props.store.tempAlert("Cập nhật thành công!", 1000))
      .catch(console.log);
    await window.location.reload();
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
              {this.Sales.map((e, index) => {
                return (
                  <div className="col-sm-8" key={index}>
                    <div className="row">
                      <div className="col-sm-12">
                        <form>
                          <div className="item-contact">
                            <label for="formGroupExampleInput1">Tên khuyến mại</label>
                            <input type="text" className="form-control" id="formGroupExampleInput1" placeholder={e.sale_name} onChange={e => {
                              this.data.sale_name = e.target.value;
                            }} />
                          </div>
                          <div className="form-group">
                            <label for="formGroupExampleInput2">Discount</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder={e.sale_discount} onChange={e => {
                              this.data.sale_discount = e.target.value;
                            }} />
                          </div>
                          <div className="form-group">
                            <label for="formGroupExampleInput3">Ngày bắt đầu</label>
                            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder={e.sale_dateBegin} onChange={e => {
                              this.data.sale_dateBegin = e.target.value;
                            }} />
                          </div>
                          <div className="form-group">
                            <label for="formGroupExampleInput4">Ngày kết thúc</label>
                            <input type="text" className="form-control" id="formGroupExampleInput4" placeholder={e.sale_dateEnd} onChange={e => {
                              this.data.sale_dateEnd = e.target.value;
                            }} />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4"><button type="button" class="btn btn-danger" onClick={() => this.offSales()}>Tạm dừng</button></div>
                      <div className="col-sm-4"><button type="button" class="btn btn-primary" onClick={() => this.onSales()}>Bật</button></div>
                      <div className="col-sm-4"><button type="button" class="btn btn-success" onClick={() => this.onEdit()}>Cập nhật</button></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div >
      );
  }
}

export default SalesAdmin;