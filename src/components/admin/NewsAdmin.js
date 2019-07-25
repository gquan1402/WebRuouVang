import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
import { GetNews } from "../../api/index";
@inject('store')
@observer
class NewsAd extends Component {
  @observable News = [];
  constructor(props) {
    super(props);
    GetNews().then(e => { this.News = e.data; }).catch(console.log);
  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  render() {
    return (
      <div id="contact" className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title_name">
                <h4>{this.props.store.title}</h4>
              </div>
            </div>
          </div>
          <div className="row tt-lienhe">
            <div className="col-sm-4 ">
              <div className="sidebar">
                <div className="sb_item">
                  <h4>Danh mục</h4>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToAdmin("Hoá Đơn", "/Admin") }}>Hoá Đơn</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToAdmin("Sản Phẩm", "/productAdmin") }}>Sản Phẩm</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToAdmin("Tin Tức", "/newsAdmin") }}>Tin Tức</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <form
                className="form-group form-contact"
                role="form"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <table class="table">
                      <thead>
                        <tr>
                          <td>Ngày Đăng</td>
                          <td>Ảnh</td>
                          <td>Tiêu Đề</td>
                          <td></td>
                          <td><button type="button" class="btn btn-primary">Thêm</button></td>
                        </tr>
                      </thead>
                      <tbody>
                        {this.News.map((e, index) => {
                          return (<tr key={index}>
                            <td>{e.news_daypost}</td>
                            <td><img style={{ height: "50px", width: "50px", marginLeft: "auto", marginRight: "auto" }}
                              src={e.news_image} className="img-responsive text-center"
                              alt="" /></td>
                            <td>{e.news_title}</td>
                            <td><button type="button" class="btn btn-primary" onClick={() => { this.goToProduct(e) }}>Sửa</button></td>
                            <td><button type="button" class="btn btn-danger">Xoá</button></td>
                          </tr>)
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default NewsAd;
