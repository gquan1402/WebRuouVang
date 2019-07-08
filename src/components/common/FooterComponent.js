import React, { Component } from "react";
import "./common.scss";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@observer
class FooterComponent extends Component {
    @observable data = {
        email: "",
        password: ""
    };

    render() {
        return (<footer>
            <div className="footer_top" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h3>Rượu vang HQT</h3>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i> Đại học Công Nghiệp Hà Nội, Từ Liêm, Hà Nội. </li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>0386451313</li>
                                <li><i className="fa fa-envelope-o" aria-hidden="true"></i> gquan1402@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>Dịch vụ</h3>
                            <ul className="list-unstyled">
                                <li><a href="introduce.html">Giới thiệu</a></li>
                                <li><a href="contact.html">Tuyển dụng</a></li>
                                <li><a href="cart.html">Giao hàng và thanh toán</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>Sản phẩm</h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Mỳ cay</a></li>
                                <li><a href="#">Mỳ ý hải sản</a></li>
                                <li><a href="#">Mỳ ý sốt gà</a></li>
                                <li><a href="#">Cơm chiên hải sản</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#">Món khai vi</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#">Thức ăn nhanh</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#">Mỳ</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#">Đồ uống</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#">BBQ</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#">Hải sản</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#">Khác</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>Kết nối</h3>
                            {/* <iframe src="" width="260px" height="200px" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default FooterComponent;
