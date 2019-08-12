import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
@observer
class NavbarComponent extends Component {
  @observable data = {
    email: "",
    password: ""
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="header_top">
              <div className="row">
                <div className="col-sm-5 hidden-xs">
                  <ul className="list-inline ht_left">
                    <li><i className="fa fa-phone" aria-hidden="true"></i> Hotline: 038.645.1313</li>
                  </ul>
                </div>

                <div className="col-sm-7">
                  <ul className="list-inline ht_right">

                    <li><NavLink to="/login" activeClassNameName="" style={{ textDecoration: "none", }}>
                      <i className="fa fa-user" aria-hidden="true"></i> Đăng nhập
                </NavLink></li>
                    <li><NavLink to="/cart" activeClassNameName="" style={{ textDecoration: "none", }}>
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i> Giỏ hàng
                  </NavLink></li>
                  </ul>
                </div>

              </div>
            </div>
            <nav>
              <div id='cssmenu'>
                <ul>
                  <li className=""><NavLink to="/" activeClassNameName="" style={{ textDecoration: "none" }}>
                    Trang chủ
                    </NavLink></li>
                  <li className=""><NavLink to="/introduce" activeClassNameName="" style={{ textDecoration: "none" }}>
                    giới thiệu
                    </NavLink></li>
                  <li className=""><NavLink to="/products" activeClassNameName="" style={{ textDecoration: "none" }}>
                    Sản phẩm
                    </NavLink></li>
                  <li className=""><NavLink to="/news" activeClassNameName="" style={{ textDecoration: "none" }}>
                    Tin tức
                    </NavLink></li>
                  <li className=""><NavLink to="/contact" activeClassNameName="" style={{ textDecoration: "none" }}>
                    Liên hệ
                    </NavLink></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div >
    );
  }
}

export default NavbarComponent;
