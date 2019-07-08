import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@observer
class HomeComponent extends Component {
  @observable data = {
    email: "",
    password: ""
  };

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
                      <img src="../../../uploads/banner/1530003086banner1.jpg" style={{ width: '100%', height: '400px' }} />
                    </div>
                    <div className="item ">
                      <img src="../../../uploads/banner/1530082465banner2.jpg"
                        style={{ width: '100%', height: '400px' }} />
                    </div>
                    <div className="item ">
                      <img src="../../../uploads/banner/1530670049banner3.jpg" style={{ width: '100%', height: '400px' }} />
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
                    <a href="productsale.html"><img src="../../../images/1.1.jpg"
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
                    <a href="productsale.html"><img src="../../../images/1.2.jpg"
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
                    <a href="productsale.html"><img src="../../../images/1.3.jpg"
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
                <h2 className="title_section">Buffet Nhà Hàng</h2>
                <p className="p_section">Trải nghiệm ẩm thực với phong cách tiệc buffet tại một nơi sang trọng, ấm cúng
					để được thưởng thức trọn vẹn hương vị trong từng món ăn</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="pro_item hover8">
                  <div className="pro_img hover_img">
                    <a href="productDetail.html?id=96"><img
                      src="../../../uploads/1528693512img57_a149012f-9624-4df1-7b11-41b846e6598b_1024x1024.jpg "
                      className="img-responsive" /></a>
                  </div>
                  <div className="pro_name">
                    <a href="productDetail.html?id=96">
                      Cazenas Mitra </a>
                  </div>
                  <div className="pro_price">
                    <ul className="list-inline">
                      <li className="new_price">250,000 VNĐ</li>
                      <li className="old_price">380,000 VNĐ</li>
                    </ul>
                  </div>

                  <div className="sale">
                    -35%
					</div>
                  <ul className="list-unstyled icon_lk">
                    <li><a href="productDetail.html?id=96"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                    <li><a href="handle_cart.html?id=96&action=add" className="add-cart"><i className="fa fa-shopping-cart"
                      aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="pro_item hover8">
                  <div className="pro_img hover_img">
                    <a href="productDetail.html?id=99"><img src="../../../uploads/1528693951gg_1024x1024.png "
                      className="img-responsive" /></a>
                  </div>
                  <div className="pro_name">
                    <a href="productDetail.html?id=99">
                      Squid Stuffed Meat </a>
                  </div>
                  <div className="pro_price">
                    <ul className="list-inline">
                      <li className="new_price">95,000 VNĐ</li>
                    </ul>
                  </div>

                  <ul className="list-unstyled icon_lk">
                    <li><a href="productDetail.html?id=99"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                    <li><a href="handle_cart.html?id=99&action=add" className="add-cart"><i className="fa fa-shopping-cart"
                      aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="pro_item hover8">
                  <div className="pro_img hover_img">
                    <a href="productDetail.html?id=112"><img src="../../../uploads/15291101692.6.jpeg "
                      className="img-responsive" /></a>
                  </div>
                  <div className="pro_name">
                    <a href="productDetail.html?id=112">
                      Gà chiên xù </a>
                  </div>
                  <div className="pro_price">
                    <ul className="list-inline">
                      <li className="new_price">75,000 VNĐ</li>
                      <li className="old_price">100,000 VNĐ</li>
                    </ul>
                  </div>

                  <div className="sale">
                    -25%
					</div>
                  <ul className="list-unstyled icon_lk">
                    <li><a href="productDetail.html?id=112"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                    <li><a href="handle_cart.html?id=112&action=add" className="add-cart"><i className="fa fa-shopping-cart"
                      aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="pro_item hover8">
                  <div className="pro_img hover_img">
                    <a href="productDetail.html?id=125"><img src="../../../uploads/1530601685lF7hLN.jpg "
                      className="img-responsive" /></a>
                  </div>
                  <div className="pro_name">
                    <a href="productDetail.html?id=125">
                      Thịt sốt vang </a>
                  </div>
                  <div className="pro_price">
                    <ul className="list-inline">
                      <li className="new_price">150,000 VNĐ</li>
                    </ul>
                  </div>

                  <ul className="list-unstyled icon_lk">
                    <li><a href="productDetail.html?id=125"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                    <li><a href="handle_cart.html?id=125&action=add" className="add-cart"><i className="fa fa-shopping-cart"
                      aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
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

        <section id="cocktail">
          <div className="container">
            <div className="row m_bottom">
              <div className="col-sm-12">
                <h2 className="title_section">Cocktails</h2>
                <p className="p_section">Để tạo nên 1 ly Cocktails là cả một nghệ thuật. Một ly Cocktail có mùi vị đặc trưng
					riêng mà bạn có thể tìm thấy tại Nhà hàng</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="pro_item hover8">
                  <div className="pro_img hover_img">
                    <a href="productDetail.html?id=95"><img src="../../uploads/1528693238img3_-_copy_large.png "
                      className="img-responsive" /></a>
                  </div>
                  <div className="pro_name">
                    <a href="productDetail.html?id=95">
                      Strawberry Pomegranate Sangria </a>
                  </div>
                  <div className="pro_price">
                    <ul className="list-inline">
                      <li className="new_price">150,000 VNĐ</li>
                      <li className="old_price">200,000 VNĐ</li>
                    </ul>
                  </div>

                  <div className="sale">
                    -25%
					</div>
                  <ul className="list-unstyled icon_lk">
                    <li><a href="productDetail.html?id=95"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                    <li><a href="handle_cart.html?id=95&action=add" className="add-cart"><i className="fa fa-shopping-cart"
                      aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="pro_item hover8">
                  <div className="pro_img hover_img">
                    <a href="productDetail.html?id=107"><img src="../../../uploads/1530150565j8QRTo.jpg "
                      className="img-responsive" /></a>
                  </div>
                  <div className="pro_name">
                    <a href="productDetail.html?id=107">
                      Bia Heineken </a>
                  </div>
                  <div className="pro_price">
                    <ul className="list-inline">
                      <li className="new_price">15,000 VNĐ</li>
                      <li className="old_price">20,000 VNĐ</li>
                    </ul>
                  </div>

                  <div className="sale">
                    -25%
					</div>
                  <ul className="list-unstyled icon_lk">
                    <li><a href="productDetail.html?id=107"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                    <li><a href="handle_cart.html?id=107&action=add" className="add-cart"><i className="fa fa-shopping-cart"
                      aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="pro_item hover8">
                  <div className="pro_img hover_img">
                    <a href="productDetail.html?id=114"><img src="../../../uploads/1530152126StrawberryColadaSmoothie.png "
                      className="img-responsive" /></a>
                  </div>
                  <div className="pro_name">
                    <a href="productDetail.html?id=114">
                      strawberry colada smoothie </a>
                  </div>
                  <div className="pro_price">
                    <ul className="list-inline">
                      <li className="new_price">40,000 VNĐ</li>
                      <li className="old_price">50,000 VNĐ</li>
                    </ul>
                  </div>

                  <div className="sale">
                    -20%
					</div>
                  <ul className="list-unstyled icon_lk">
                    <li><a href="productDetail.html?id=114"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                    <li><a href="handle_cart.html?id=114&action=add" className="add-cart"><i className="fa fa-shopping-cart"
                      aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="pro_item hover8">
                  <div className="pro_img hover_img">
                    <a href="productDetail.html?id=126"><img src="../../../uploads/1531119536pexels-photo-1003711.jpeg "
                      className="img-responsive" /></a>
                  </div>
                  <div className="pro_name">
                    <a href="productDetail.html?id=126">
                      Coca Cola </a>
                  </div>
                  <div className="pro_price">
                    <ul className="list-inline">
                      <li className="new_price">20,000 VNĐ</li>
                      <li className="old_price">35,000 VNĐ</li>
                    </ul>
                  </div>

                  <div className="sale">
                    -43%
					</div>
                  <ul className="list-unstyled icon_lk">
                    <li><a href="productDetail.html?id=126"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                    <li><a href="handle_cart.html?id=126&action=add" className="add-cart"><i className="fa fa-shopping-cart"
                      aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="banner3" className="banner_t">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 m_b15">
                <div className="hover8">
                  <div className="hover_img">
                    <a href="productDetail.html"><img src="../../../images/banner1.1.jpg" className="img-responsive" /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="hover8">
                  <div className="hover_img">
                    <a href="productDetail.html"><img src="../../../images/banner1.2.jpg" className="img-responsive" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="banner4" class="banner_t">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="hover8">
                  <div class="hover_img">
                    <a href="productDetail.html"><img src="../../../images/banner_n2.jpg" class="img-responsive" /></a>
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
