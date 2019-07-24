import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
import { GetProducts } from '../../api/index';
@inject('store')
@observer
class HomeComponent extends Component {
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
      <div>
        <section id="banner1" class="bn1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 p_right">
                <div id="carousel-id" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="item active">
                      <img src="../../../uploads/1.jpg" style={{ width: '100%', height: '500px' }} />
                    </div>
                    <div className="item ">
                      <img src="../../../uploads/2.jpg"
                        style={{ width: '100%', height: '500px' }} />
                    </div>
                    <div className="item ">
                      <img src="../../../uploads/3.jpg" style={{ width: '100%', height: '500px' }} />
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span
                    className="glyphicon glyphicon-chevron-left"></span></a>
                  <a className="right carousel-control" href="#carousel-id" data-slide="next"><span
                    className="glyphicon glyphicon-chevron-right"></span></a>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="buy_now">
          <div className="container">
            <div className="row m_bottom">
              <div className="col-sm-12">
                <h2 className="title_section">Should You Buy Now ?</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 m_b">
                <div className="bn_item hover8">
                  <div className="bn_img hover_img">
                    <a href="productsale.html"><img src="../../../images/discount1.jpeg" style={{ width: "370px", height: "246px" }}
                      className="img-responsive" /></a>
                  </div>
                  <div className="bn_des">
                    <h4 className="tt_des">DISCOUNT 20%</h4>
                    <p className="d_des">Sale up to 60% on 50+ products include wedding flowers</p>
                    <div className="xem_them">
                      <a href="productsale.html">Xem thêm</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m_b15">
                <div className="bn_item hover8 bn_center">
                  <div className="hover_img">
                    <a href="productsale.html"><img src="../../../images/discount2.jpeg" style={{ width: "366px", height: "405px" }}
                      className="img-responsive" /></a>
                    <div className="xem_them xt_center">
                      <a href="productsale.html">Xem thêm</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m_b">
                <div className="bn_item hover8">
                  <div className="bn_img hover_img">
                    <a href="productsale.html"><img src="../../../images/discount3.jpeg" style={{ width: "370px", height: "246px" }}
                      className="img-responsive" /></a>
                  </div>
                  <div className="bn_des">
                    <h4 className="tt_des">DISCOUNT 20%</h4>
                    <p className="d_des">Sale up to 60% on 50+ products include wedding flowers</p>
                    <div className="xem_them">
                      <a href="productsale.html">Xem thêm</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="buffet">
          <div className="container">
            <div className="row m_bottom">
              <div className="col-sm-12">
                <h2 className="title_section">Sản phẩm bán chạy</h2>
                <p className="p_section">Trải nghiệm hương vị tuyệt hảo của nhưng chai rượu vang chát lượng hàng đầu thế giới.</p>
              </div>
            </div>
            {this.Products.map((e, index) => {
              if (e.category_id == "5d2297f7e7179a4e432ecf7e") {
                return (<div className="col-sm-3" key={index}>
                  <div className="pro_item hover8">
                    <div className="pro_img hover_img" onClick={() => { this.goToProduct(e) }}>
                      <a href="#"><img
                        src={e.product_image}
                        className="img-responsive" /></a>
                    </div>
                    <div className="pro_name">
                      <a href="productDetail.html?id=96">
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
        </section>

        <section id="banner2" className="banner_t">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="hover8">
                  <div className="hover_img">
                    <a href="productDetail.html"><img src="../../../images/banner_n.jpg" className="img-responsive" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeComponent;
