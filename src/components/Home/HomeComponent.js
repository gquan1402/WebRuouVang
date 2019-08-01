import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
import { GetProducts } from '../../api/index';
import { GetSales } from "../../api/index";
@inject('store')
@observer
class HomeComponent extends Component {
  @observable Products = [];
  @observable tk = "";
  constructor(props) {
    super(props);
    GetSales()
      .then(e => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        var d3 = Date.parse(today);
        var d1 = Date.parse(e.data[0].sale_dateBegin);
        var d2 = Date.parse(e.data[0].sale_dateEnd);
        if (d3 >= d1 && d3 <= d2 && e.data[0].sale_status == true) {
          localStorage.sale = e.data[0].sale_discount;
        }
        else {
          localStorage.sale = 0;
        }
      })
      .catch(console.log);
    GetProducts().then(b => { this.Products = b.data; }).catch(console.log);
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
  search = () => {
    if (this.tk != null) {
      switch (this.tk) {
        case "vang phap":
          this.goToProductId("5d2295abe7179a4e432eceed", "Rượu Vang Pháp");
          break;
        case "vang y":
          this.goToProductId("5d2297f7e7179a4e432ecf7e", "Rượu Vang Ý");
          break;
        case "vang chile":
          this.goToProductId("5d229809e7179a4e432ecf80", "Rượu Vang Chile");
          break;
        case "vang tay ban nha":
          this.goToProductId("5d22981be7179a4e432ecf81", "Rượu Vang Tây Ban Nha")
          break;
        case "vang my":
          this.goToProductId("5d229827e7179a4e432ecf83", "Rượu Vang Mỹ")
          break;
        default:
          this.props.store.tempAlert("Không tìm thấy sản phẩm!", 1000)
      }
    }
  }
  render() {
    return (
      <div>
        <div className="container pb-3 ">
          <div class="header_center">
            <div class="row">
              <div class="col-sm-4">
              </div>
              <div class="col-sm-4">
              </div>
              <div class="col-sm-3 hidden-xs ">
                <div class="search">
                  <div class="custom-search-input">
                    <div class="input-group col-md-12">
                      <input type="text" class="form-control" name="nameproduct"
                        placeholder="Nhập tìm kiếm" required="required" onChange={e => {
                          this.tk = e.target.value;
                        }} />
                      <span>
                        <button class="btn btn-info" onClick={() => {
                          this.search()
                        }} >
                          <i class="glyphicon glyphicon-search"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <h4 className="tt_des">DISCOUNT {localStorage.sale}%</h4>
                    <p className="d_des">Sale up to 60% on 50+ products </p>
                    <div className="xem_them" onClick={() => { this.props.history.push('/products') }}>
                      Xem thêm
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m_b15">
                <div className="bn_item hover8 bn_center">
                  <div className="hover_img">
                    <a href="productsale.html"><img src="../../../images/discount2.jpeg" style={{ width: "366px", height: "405px" }}
                      className="img-responsive" /></a>
                    <div className="xem_them xt_center" onClick={() => { this.props.history.push('/products') }}>
                      Xem thêm
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
                    <h4 className="tt_des">DISCOUNT {localStorage.sale}%</h4>
                    <p className="d_des">Sale up to 60% on 50+ products </p>
                    <div className="xem_them" onClick={() => { this.props.history.push('/products') }}>
                      Xem thêm
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
              }
            })}
          </div>
        </section>
      </div >
    );
  }
}

export default HomeComponent;
