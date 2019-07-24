import React, { Component } from "react";
import "./common.scss";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@inject('store')
@observer
class FooterComponent extends Component {
    @observable data = {
        email: "",
        password: ""
    };
    goToProductId(id, name) {
        this.props.store.id = id;
        this.props.store.idname = name;
        this.props.history.push('/productId');
    }
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
                            <ul class="list-unstyled menu1">
                                <li>Rượu Vang Pháp</li>
                            </ul>
                            <ul class="list-unstyled menu1">
                                <li>Rượu Vang Ý</li>
                            </ul>
                            <ul class="list-unstyled menu1">
                                <li>Rượu Vang Chile</li>
                            </ul>
                            <ul class="list-unstyled menu1">
                                <li>Rượu Vang Tây Ban Nha</li>
                            </ul>
                            <ul class="list-unstyled menu1">
                                <li>Rượu Vang Mỹ</li>
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
