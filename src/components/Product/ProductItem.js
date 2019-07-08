import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@observer
class ProductItem extends Component {
    @observable data = {
        email: "",
        password: ""
    };

    render() {
        return (
            <section id="productDetail" class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="banner_product">
                                <img src="../../../public/images/banner_product.jpg" class="img-responsive" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="title_page">
                                <ul class="list-inline">
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                                    <li><a href="product.html">Sản phẩm</a></li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                                    <li>
                                        Hamburger Onions </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-9 col-sm-push-3">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="title_name">
                                        <h4>
                                            Hamburger Onions </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row p_Detail">
                                <div class="col-sm-6">
                                    <div class="demo">
                                        <div class="zoom-section">
                                            <div class="zoom-small-image">
                                                <a href='uploads/1529449825TYb8VU.jpg' class='cloud-zoom' id='zoom1'
                                                    rel="adjustX:10, adjustY:-4"><img
                                                        src="../../../public/images/48564-chai-ruou-vang-phap-le-carmes.jpg" alt=''
                                                        title="Optional title display" style="height: 250px; width: 65%;" /></a>
                                            </div>
                                            <div class="zoom-desc">

                                                <p>
                                                    <a href='images/48564-chai-ruou-vang-phap-le-carmes.jpg'
                                                        class='cloud-zoom-gallery' title='Red'
                                                        rel="useZoom: 'zoom1', smallImage: 'images/48564-chai-ruou-vang-phap-le-carmes.jpg' "><img
                                                            class="zoom-tiny-image zoom-anh" style="height: 60px; width: 15%;"
                                                            src="../../../public/images/48564-chai-ruou-vang-phap-le-carmes.jpg" alt="" /></a>

                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                                <div class="col-sm-6">
                                    <div class="pname_Detail">
                                        <form >
                                            <p class="pd_title">Rượu vang Pháp 1990</p>
                                            <div class="bigstars">
                                                <div class="rateit" data-rateit-value="3" data-rateit-starwidth="32"
                                                    data-rateit-starheight="32" data-rateit-min="0" data-rateit-max="5">

                                                </div>
                                            </div>
                                            <p class="p_price"><strong>Giá: </strong>
                                                <em>
                                                    30,000 VNĐ
                                        </em>
                                            </p>
                                            <p><strong>Mã SP:</strong> 104</p>
                                            <p><strong>dung Tích:</strong> 100ml</p>
                                            <p><strong>Nồng Độ:</strong> 20% </p>
                                            {/* <div class="sl"><strong>Số lượng:</strong>
                                        <input type="number" name="quantitys" value="1" min="1">
                                        <input type="hidden" name="id" value="104">
                                    </div> */}
                                            <button class="btn btn-button">MUA NGAY</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="row tt_sp">
                                <div class="col-sm-12">
                                    <div class="title_name">
                                        <h4>
                                            Thông tin sản phẩm
                                </h4>
                                    </div>
                                </div>
                                <div class="col-sm-12 main_tt">
                                    <p>
                                    </p>
                                </div>
                            </div>

                            <div class="row sp_lq">
                                <div class="col-sm-12">
                                    <div class="title_name">
                                        <h4>
                                            Sản phẩm liên quan
                                </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row r_lq">
                                <div class="col-sm-4">
                                    <div class="pro_item hover8">
                                        <div class="pro_img hover_img">
                                            <a href="productDetail.html?id=89"><img
                                                src="../../../public/images/48564-chai-ruou-vang-phap-le-carmes.jpg" class="img-responsive" /></a>
                                        </div>
                                        <div class="pro_name">
                                            <a href="productDetail.html?id=89">
                                                Cupcake Dâu Tây </a>
                                        </div>
                                        <div class="pro_price">
                                            <ul class="list-inline">
                                                <li class="new_price">30,000 VNĐ</li>
                                                <li class="old_price">40,000 VNĐ</li>
                                            </ul>
                                        </div>


                                        <div class="sale">
                                            -25%
                                </div>
                                        <ul class="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=89"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=89&action=add" class="add-cart"><i
                                                class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="pro_item hover8">
                                        <div class="pro_img hover_img">
                                            <a href="productDetail.html?id=91"><img
                                                src="../../../public/images/48564-chai-ruou-vang-phap-le-carmes.jpg" class="img-responsive" /></a>
                                        </div>
                                        <div class="pro_name">
                                            <a href="productDetail.html?id=91">
                                                Bánh Pie D0075 </a>
                                        </div>
                                        <div class="pro_price">
                                            <ul class="list-inline">
                                                <li class="new_price">175,000 VNĐ</li>
                                            </ul>
                                        </div>


                                        <ul class="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=91"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=91&action=add" class="add-cart"><i
                                                class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="pro_item hover8">
                                        <div class="pro_img hover_img">
                                            <a href="productDetail.html?id=92"><img
                                                src="../../../public/images/48564-chai-ruou-vang-phap-le-carmes.jpg" class="img-responsive" /></a>
                                        </div>
                                        <div class="pro_name">
                                            <a href="productDetail.html?id=92">
                                                Curabitur Cursus Dignis </a>
                                        </div>
                                        <div class="pro_price">
                                            <ul class="list-inline">
                                                <li class="new_price">90,000 VNĐ</li>
                                            </ul>
                                        </div>


                                        <ul class="list-unstyled icon_lk">
                                            <li><a href="productDetail.html?id=92"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="handle_cart.html?id=92&action=add" class="add-cart"><i
                                                class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 col-sm-pull-9">
                            <div class="sidebar">
                                <div class="sb_item">
                                    <h4>Danh mục</h4>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=1">Rượu Vang</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=2">Rượu Rum</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=3">Rượu Gạo</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=4">Vang Pháp</a></li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li><a href="danh-muc.html?id=5">Vang Đà Lạt</a></li>
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

export default ProductItem;
