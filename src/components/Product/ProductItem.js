import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
import { GetProducts } from '../../api/index';

@inject('store')
@observer
class ProductItem extends Component {
    @observable item = "";
    @observable Products = [];
    constructor(props) {
        super(props);
        this.item = this.props.store.Product;
        GetProducts().then(e => { this.Products = e.data; }).catch(console.log);
    }
    goToProduct(e) {
        this.item = e;
    }
    goToProductId(id, name) {
        this.props.store.id = id;
        this.props.store.idname = name;
        this.props.history.push('/productId');
    }
    render() {
        return (
            <section id="productDetail" class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="banner_product">
                                <img src="../../../images/banner_product.jpg" class="img-responsive" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="title_page">
                                <ul class="list-inline">
                                    <li>Trang chủ</li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                                    <li>Sản phẩm</li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                                    <li>
                                        {this.item.product_name} </li>
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
                                            {this.item.product_name} </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row p_Detail">
                                <div class="col-sm-6">
                                    <div class="demo">
                                        <div class="zoom-section">
                                            <div class="zoom-small-image">
                                                <a href='#' class='cloud-zoom' id='zoom1'
                                                    rel="adjustX:10, adjustY:-4"><img
                                                        src={this.item.product_image} alt=''
                                                        title="Optional title display" style={{ height: "250px", width: "65%" }} /></a>
                                            </div>
                                            {/* <div class="zoom-desc">

                                                <p>
                                                    <a href='images/48564-chai-ruou-vang-phap-le-carmes.jpg'
                                                        class='cloud-zoom-gallery' title='Red'
                                                        rel="useZoom: 'zoom1', smallImage: 'images/48564-chai-ruou-vang-phap-le-carmes.jpg' "><img
                                                            class="zoom-tiny-image zoom-anh" style={{ height: "60px", width: "15%" }}
                                                            src={this.item.product_image} alt="" /></a>

                                                </p>
                                            </div> */}
                                        </div>

                                    </div>

                                </div>



                                <div class="col-sm-6">
                                    <div class="pname_Detail">
                                        <form >
                                            <p class="pd_title">{this.item.product_name}</p>
                                            <div class="bigstars">
                                                <div class="rateit" data-rateit-value="3" data-rateit-starwidth="32"
                                                    data-rateit-starheight="32" data-rateit-min="0" data-rateit-max="5">

                                                </div>
                                            </div>
                                            <p class="p_price"><strong>Giá: </strong>
                                                <em>
                                                    {this.item.product_cost} USD
                                                </em>
                                            </p>
                                            <p><strong>Tình Trạng:</strong> Còn hàng</p>
                                            <p><strong>Dung Tích:</strong> {this.item.product_capacity}</p>
                                            <p><strong>Nồng Độ:</strong> {this.item.product_concentration} </p>
                                            <p><strong>Nhiệt Độ Sử Dụng:</strong> {this.item.product_temperature} &#176; C</p>
                                            <div class="btn btn-button btn-mua" onClick={() => this.props.store.onAddToCart(this.item, 1)}>MUA NGAY</div>
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
                                        {this.item.product_describe}
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
                            {this.Products.map((e, index) => {
                                if (e.category_id == this.item.category_id && e._id != this.item._id) {
                                    return (<div className="col-sm-4" key={index}>
                                        <div className="pro_item hover8" onClick={() => { this.goToProduct(e) }}>
                                            <div className="pro_img hover_img">
                                                <a href="#"><img
                                                    src={e.product_image}
                                                    className="img-responsive anhsp" /></a>
                                            </div>
                                            <div className="pro_name">
                                                <a href="#">
                                                    {e.product_name}</a>
                                            </div>
                                            <div className="pro_price">
                                                <ul className="list-inline">
                                                    <li className="new_price">{e.product_cost} USD</li>
                                                    <li className="old_price">{e.product_cost + e.product_cost * 0.25} USD</li>
                                                </ul>
                                            </div>

                                            <div className="sale">
                                                -25%
                                    </div>
                                            <ul className="list-unstyled icon_lk">
                                                <li><i className="fa fa-eye" aria-hidden="true"></i>
                                                </li>
                                                <li onClick={() => this.props.store.onAddToCart(e, 1)}><i
                                                    className="fa fa-shopping-cart " aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                    </div>)
                                }
                            })}
                        </div>
                        <div class="col-sm-3 col-sm-pull-9">
                            <div class="sidebar">
                                <div class="sb_item">
                                    <h4>Danh mục</h4>
                                    <ul class="list-unstyled menu1">
                                        <li onClick={() => { this.goToProductId("5d2295abe7179a4e432eceed", "Rượu Vang Pháp") }}>Rượu Vang Pháp</li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li onClick={() => { this.goToProductId("5d2297f7e7179a4e432ecf7e", "Rượu Vang Ý") }}>Rượu Vang Ý</li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li onClick={() => { this.goToProductId("5d229809e7179a4e432ecf80", "Rượu Vang Chile") }}>Rượu Vang Chile</li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li onClick={() => { this.goToProductId("5d22981be7179a4e432ecf81", "Rượu Vang Tây Ban Nha") }}>Rượu Vang Tây Ban Nha</li>
                                    </ul>
                                    <ul class="list-unstyled menu1">
                                        <li onClick={() => { this.goToProductId("5d229827e7179a4e432ecf83", "Rượu Vang Mỹ") }}>Rượu Vang Mỹ</li>
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
