import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
import { GetProducts } from '../../api/index';
@inject('store')
@observer
class Menu extends Component {
    @observable Products = [];
    constructor(props) {
        super(props);
        GetProducts().then(e => { this.Products = e.data; }).catch(console.log);

    }
    goToProduct(e) {
        this.props.store.Product = e;
        this.props.history.push('/productitems');
    }
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
                            {this.Products.map((e, index) => {
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
                                            <li onClick={() => console.log(this.Products)}><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>)
                            })}
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