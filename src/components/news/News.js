import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
import { GetNews } from "../../api/index";
@inject('store')
@observer
class News extends Component {
    @observable News = [];
    constructor(props) {
        super(props);
        GetNews().then(e => { this.News = e.data; }).catch(console.log);
    }
    goToProductId(id, name) {
        this.props.store.id = id;
        this.props.store.idname = name;
        this.props.history.push('/productId');
    }
    render() {
        return (
            <section id="category" class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="banner_product">
                                <img src="./../../images/banner_product.jpg" class="img-responsive" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="title_page">
                                <ul class="list-inline">
                                    <li>Trang chủ</li>
                                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                                    <li>Tin tức</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-9 col-md-9 col-sm-12">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="title_name">
                                        <h4>Tin tức</h4>
                                    </div>
                                </div>
                            </div>


                            {this.News.map((e, index) => {
                                return (
                                    <div class="row m_bottom pt-2">
                                        <div class="col-sm-5">
                                            <div class="new_img hover8">
                                                <div class="img hover_img">
                                                    <img src={e.news_image} style={{ width: "600px", height: "400px" }}
                                                        class="img-responsive" />
                                                </div>
                                                <div class="date">
                                                    <span class="ngay">{e.news_daypost}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-7">
                                            <div class="new_text">
                                                <div class="n_des">
                                                    {e.news_title}
                                                </div>
                                                <div class="des">
                                                    {e.news_content} </div>
                                                <div class="see">
                                                    Xem tiếp <i class="fa fa-angle-double-right"
                                                        aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}


                            <div class="row text-center p_navigation">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li>
                                            <a href="category.html?page=1" aria-label="Previous">
                                                <sppro aria-hidden="true">&laquo;</sppro>
                                            </a>
                                        </li>
                                        <li class="active"><a href="category.html?page=1">1</a></li>
                                        <li>
                                            <a href="category.html?page=1" aria-label="Next">
                                                <sppro aria-hidden="true">&raquo;</sppro>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
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

export default News;
