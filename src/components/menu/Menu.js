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
    goToProductId(id, name) {
        this.props.store.id = id;
        this.props.store.idname = name;
        this.props.history.push('/productId');
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
                                    <li>Trang chủ</li>
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
                                    <div className="pro_item hover8" >
                                        <div className="pro_img hover_img" onClick={() => { this.goToProduct(e) }}>
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
                                                <li className="old_price">{e.product_cost + e.product_cost * (localStorage.sale / 100)} USD</li>
                                            </ul>
                                        </div>

                                        <div className="sale">
                                            -{localStorage.sale}%
                                    </div>
                                        <ul className="list-unstyled icon_lk">
                                            <li><i className="fa fa-eye" aria-hidden="true"></i>
                                            </li>
                                            <li onClick={() => this.props.store.onAddToCart(e, 1)}><i
                                                className="fa fa-shopping-cart " aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>)
                            })}

                        </div>
                        <div className="col-sm-3 col-sm-pull-9">
                            <div className="sidebar">
                                <div className="sb_item">
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

export default Menu;