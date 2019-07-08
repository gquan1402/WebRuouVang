import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@observer
class Menu extends Component {
    @observable data = {
        email: "",
        password: ""
    };

    render() {
        return (
            <section id="product" className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="banner_product">
                                <img src="../../../images/banner_product.jpg" className="img-responsive" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title_page">
                                <ul className="list-inline">
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                                    <li>Sản phẩm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-9 col-sm-push-3">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="title_name">
                                        <h4>Tất cả sản phẩm</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=89"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=89">
                                                Cupcake Dâu Tây </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">30,000 VNĐ</li>
                                                <li className="old_price">40,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <div className="sale">
                                            -25%
							</div>
                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=89"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=89&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=91"><img src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=91">
                                                Bánh Pie D0075 </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">175,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=91"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=91&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=92"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=92">
                                                Curabitur Cursus Dignis </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">90,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=92"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=92&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=104"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=104">
                                                Hamburger Onions </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">30,000 VNĐ</li>
                                                <li className="old_price">50,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <div className="sale">
                                            -40%
							</div>
                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=104"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=104&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=113"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=113">
                                                White Ice Cream </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">20,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=113"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=113&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=117"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=117">
                                                Golden Grahams </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">180,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=117"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=117&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=102"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=102">
                                                Pizza Nova </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">80,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=102"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=102&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=103"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=103">
                                                Khoai tây chiên </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">50,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=103"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=103&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=106"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=106">
                                                Khoai tây lắc phô mai </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">40,000 VNĐ</li>
                                                <li className="old_price">45,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <div className="sale">
                                            -12%
							</div>
                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=106"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=106&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=110"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=110">
                                                Hamburger Turkey </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">85,000 VNĐ</li>
                                                <li className="old_price">100,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <div className="sale">
                                            -15%
							</div>
                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=110"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=110&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=116"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=116">
                                                Ratima Pikamef </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">130,000 VNĐ</li>
                                                <li className="old_price">180,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <div className="sale">
                                            -28%
							</div>
                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=116"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=116&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="pro_item hover8">
                                        <div className="pro_img hover_img">
                                            <a href="productDetail.html?id=108"><img
                                                src="../../../uploads/15290263483_1024x1024.jpg"
                                                className="img-responsive anhsp" /></a>
                                        </div>
                                        <div className="pro_name">
                                            <a href="productDetail.html?id=108">
                                                Mì thạch Hàn Quốc </a>
                                        </div>
                                        <div className="pro_price">
                                            <ul className="list-inline">
                                                <li className="new_price">68,000 VNĐ</li>
                                                <li className="old_price">80,000 VNĐ</li>
                                            </ul>
                                        </div>

                                        <div className="sale">
                                            -15%
							</div>
                                        <ul className="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=108"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=108&action=add" className="add-cart"><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row text-center p_navigation">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li>
                                            <a href="product.html?page=1" aria-label="Previous">
                                                <sppro aria-hidden="true">&laquo;</sppro>
                                            </a>
                                        </li>
                                        <li className="active"><a href="product.html?page=1">1</a></li>
                                        <li><a href="product.html?page=2">2</a></li>
                                        <li><a href="product.html?page=3">3</a></li>
                                        <li>
                                            <a href="product.html?page=2" aria-label="Next">
                                                <sppro aria-hidden="true">&raquo;</sppro>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div> */}
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

export default Menu;