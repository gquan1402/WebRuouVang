import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { GetBills } from "../../api/index";
import { Redirect } from 'react-router';
@inject('store')
@observer
class Billed extends Component {
  @observable Bills = [];
  @observable id = "";
  @observable date = "";
  constructor(props) {
    super(props);
    GetBills().then(e => { this.Bills = e.data }).catch(console.log);

  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  check = async () => {
    let FindDate = [];
    for (let i = 0; i < this.Bills.length; i++) {
      if (this.Bills[i].bill_datetime === this.date) {
        FindDate.push(this.Bills[i]);
      }
    }
    this.Bills = FindDate;
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
                    <ul className="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Hoá Đơn", "/Admin") }}>Hoá Đơn</li>
                    </ul>
                    <ul className="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Sản Phẩm", "/productAdmin") }}>Sản Phẩm</li>
                    </ul>
                    <ul className="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Tin Tức", "/newsAdmin") }}>Tin Tức</li>
                    </ul>
                    <ul className="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Sales", "/SalesAdmin") }}>Sales</li>
                    </ul>
                    <ul className="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Managers", "/managers") }}>Quản lý</li>
                    </ul>
                    <ul className="list-unstyled menu1">
                      <li onClick={() => { this.props.history.push("/"); localStorage.check = "false" }}>Đăng xuất</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="row pb-5">
                  <div className="col-sm-8"></div>
                  <div className="col-sm-4">
                    <input className="form-control" type="date" placeholder="Tìm kiếm theo ngày" onChange={e => {
                      this.date = e.target.value;
                    }} />
                    <button type="button" className="btn btn-outline-info" onClick={() => this.check()}>Search</button>
                  </div>
                </div>
                <div className="row pb-5">
                  <div className="col-sm-12">
                    {this.Bills.map((e, index) => {
                      if (e.bill_status === true) {
                        return (
                          <table className="table" key={index}>
                            <thead className="thead-light">
                              <tr>
                                <th>Họ Tên</th>
                                <th>SDT</th>
                                <th>Địa Chỉ</th>
                                <th>Email</th>
                                <th>{e.bill_datetime}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{e.customer_name}</td>
                                <td>{e.customer_phone}</td>
                                <td>{e.custumer_address}</td>
                                <td>{e.customer_email}</td>
                              </tr>
                              <tr>
                                <th>STT</th>
                                <th>Ảnh SP</th>
                                <th>Tên SP</th>
                                <th>Đơn Giá</th>
                                <th>Số lượng</th>
                              </tr>
                              {e.Product.map((item, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td><img style={{ height: "50px", width: "50px", marginLeft: "auto", marginRight: "auto" }}
                                      src={item[0].product_image} className="img-responsive text-center"
                                      alt="" /></td>
                                    <td>{item[0].product_name}</td>
                                    <td className="text-danger">{item[0].product_cost}<u>USD</u></td>
                                    <td>{item[0].product_quantity}</td>
                                  </tr>
                                )
                              })}
                              <tr>
                                <td>Tổng tiền</td>
                                <td>{e.bill_cost} USD</td>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>

                            </tbody>
                          </table>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Billed;
