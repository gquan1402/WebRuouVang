import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@observer
class Cart extends Component {
  @observable data = {
    email: "",
    password: ""
  };

  render() {
    return (
      <section id="cart">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title_page">
                <ul className="list-inline">
                  <li><a href="index.html">Trang chủ</a></li>
                  <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                  <li>Giỏ hàng</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row c_Detail">

            <div className="col-sm-9 col-sm-push-3">
              <form >
                <div className="table-responsive img_cart">
                  <table className="table table-bordered table-hover">
                    <tr>
                      <th style={{ width: "5%" }} className="text-center">STT</th>
                      <th style={{ width: "15%" }} className="text-center">Ảnh sản phẩm</th>
                      <th style={{ width: "25%" }} className="text-center">Tên sản phẩm</th>
                      <th style={{ width: "15%" }} className="text-center">Đơn giá</th>
                      <th style={{ width: "10%" }} className="text-center">Số lượng</th>
                      <th style={{ width: "15%" }} className="text-center">Thành tiền</th>
                      <th style={{ width: "5%" }} className="text-center">Xóa</th>
                    </tr>
                    <form method="post" action="" id="myForm"></form>
                    <tr>
                      <td>1</td>
                      <td><img style={{ height: "50px", width: "50px", marginLeft: "auto", marginRight: "auto" }}
                        src="../../../uploads/1528693951gg_1024x1024.png" className="img-responsive text-center"
                        alt="" /></td>
                      <td>
                        Squid Stuffed Meat </td>
                      <td className="text-danger">95,000<sup><u>đ</u></sup></td>
                      <td>
                        <input style={{ width: "60px" }} type="number" id="quantitys" name="quantitys[]"
                          value="2" min="1" />

                        <input type="hidden" name="id[]" value="99" />

                      </td>
                      <td className="text-danger">190,000<sup><u>đ</u></sup></td>
                      <td><a href="handle_cart.html?id=99&action=delete"
                        onclick="return confirm('bạn có chắc chắn xóa không? ')"><i
                          className="fa fa-trash-o"></i></a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><img style={{ height: "50px", width: "50px", marginLeft: "auto", marginRight: "auto" }}
                        src="../../../uploads/1528693238img3_-_copy_large.png" className="img-responsive text-center"
                        alt="" /></td>
                      <td>
                        Strawberry Pomegranate Sangria </td>
                      <td className="text-danger">150,000<sup><u>đ</u></sup></td>
                      <td>
                        <input style={{ width: "60px" }} type="number" id="quantitys" name="quantitys[]"
                          value="1" min="1" />

                        <input type="hidden" name="id[]" value="95" />

                      </td>
                      <td className="text-danger">150,000<sup><u>đ</u></sup></td>
                      <td><a href="handle_cart.html?id=95&action=delete"
                        onclick="return confirm('bạn có chắc chắn xóa không? ')"><i
                          className="fa fa-trash-o"></i></a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><img style={{ height: "50px", width: "50px", marginLeft: "auto", marginRight: "auto" }}
                        src="../../../uploads/1530241376fg_large.png" className="img-responsive text-center" alt="" />
                      </td>
                      <td>
                        Ratima Pikamef </td>
                      <td className="text-danger">130,000<sup><u>đ</u></sup></td>
                      <td>
                        <input style={{ width: "60px" }} type="number" id="quantitys" name="quantitys[]"
                          value="1" min="1" />

                        <input type="hidden" name="id[]" value="116" />

                      </td>
                      <td className="text-danger">130,000<sup><u>đ</u></sup></td>
                      <td><a href="handle_cart.html?id=116&action=delete"
                        onclick="return confirm('bạn có chắc chắn xóa không? ')"><i
                          className="fa fa-trash-o"></i></a></td>
                    </tr>



                    <tr className="end">
                      <td colspan="4">
                        <a href="product.html" className="btn btn-button">+ Mua thêm</a>

                        <button className="btn btn-button add-quantity" name="all">Cập nhật</button>

                        <a href="handle_cart.html?&action=deleteall" className="btn btn-button"
                          onclick="return confirm('bạn có chắc chắn hủy đơn hàng này không? ')">Hủy đơn
                        hàng</a>
                      </td>
                      <td className="text-right">
                        Tổng cộng:
                    </td>
                      <td colspan="2" className="text-danger text-left">
                        <strong>470,000 <sup><u>đ</u></sup></strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </form>




              <div className="panel_container">
                <h3>Thông tin đặt hàng</h3>
                <p>Vui lòng điền đầy đủ và chính xác thông tin để chúng tôi hoàn thành đơn hàng!</p>
                <form className="form-horizontal" >
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input type="text" name="name" className="form-control"
                        placeholder="Họ và tên (Bắt buộc)" required="" />
                    </div>
                    <div className="col-sm-12" style={{ paddingTop: "7px" }}>
                      <input type="text" name="phone" min="0" className="form-control"
                        required="" placeholder="Điện thoại (Bắt buộc)" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input type="email" name="email" className="form-control"
                        required="" placeholder="Email (Bắt buộc)" />
                    </div>
                    <div className="col-sm-12" style={{ paddingTop: "7px" }}>
                      <input type="text" name="address" className="form-control"
                        placeholder="Địa chỉ" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <textarea type="text" className="form-control" name="Content" placeholder="Nội dung"
                        rows="5"></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-button"><a href="bill.html">Đặt hàng</a></button>
                  </div>
                </form>
              </div>

            </div>

            <div className="col-sm-3 col-sm-pull-9">
              <div className="sidebar">
                <div className="sb_item">
                  <h4>Danh mục</h4>
                  <ul className="list-unstyled menu1">
                    <li><a href="danh-muc.html?id=1">Món khai vi</a></li>
                  </ul>
                  <ul className="list-unstyled menu1">
                    <li><a href="danh-muc.html?id=2">Thức ăn nhanh</a></li>
                  </ul>
                  <ul className="list-unstyled menu1">
                    <li><a href="danh-muc.html?id=3">Mỳ</a></li>
                  </ul>
                  <ul className="list-unstyled menu1">
                    <li><a href="danh-muc.html?id=4">Đồ uống</a></li>
                  </ul>
                  <ul className="list-unstyled menu1">
                    <li><a href="danh-muc.html?id=5">BBQ</a></li>
                  </ul>
                  <ul className="list-unstyled menu1">
                    <li><a href="danh-muc.html?id=6">Hải sản</a></li>
                  </ul>
                  <ul className="list-unstyled menu1">
                    <li><a href="danh-muc.html?id=7">Khác</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
