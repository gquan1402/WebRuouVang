import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
import { addNews } from "../../api/index";
import { Redirect } from 'react-router';
@inject('store')
@observer
class AddNew extends Component {
  @observable new =
    {
      news_title: "",
      news_image: "",
      news_daypost: "07/28/2019",
      news_editer: "Phan Anh Quân",
      news_content: ""
    }
    ;
  constructor(props) {
    super(props);
  }
  goToAdmin = (title, to) => {
    this.props.store.title = title;
    this.props.history.push(to);
  }
  add = async () => {
    if (this.new.news_title != "" && this.new.news_image != "" && this.new.news_content != "") {
      await addNews(
        this.new.news_title, this.new.news_image, this.new.news_daypost, this.new.news_editer, this.new.news_content
      ).then(this.props.store.tempAlert("Thành công!", 1000)).catch(console.log);
      await this.goToAdmin("Tin Tức", "/newsAdmin");
    }
    else {
      this.props.store.tempAlert("Bạn cần nhập đủ thông tin!", 1000);
      console.log(this.new);
    }
  }
  render() {
    return localStorage.check != "true" ? (
      <Redirect push to="/" />
    ) : (
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
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Sales", "/SalesAdmin") }}>Sales</li>
                    </ul>
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.goToAdmin("Managers", "/managers") }}>Quản lý</li>
                    </ul>
                    <ul class="list-unstyled menu1">
                      <li onClick={() => { this.props.history.push("/"); localStorage.check = "false" }}>Đăng xuất</li>
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
                      <div className="item-contact">
                        <label for="mail">Tiêu Đề</label>
                        <input type="mail" className="form-control" id="mail" required onChange={e => {
                          this.new.news_title = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="sdt">Link ảnh</label>
                        <input type="text" className="form-control" id="sdt" onChange={e => {
                          this.new.news_image = e.target.value;
                        }} />
                      </div>
                      <div className="item-contact">
                        <label for="sdt">Nội dung</label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="request"

                          rows="5"
                          required
                          onChange={e => {
                            this.new.news_content = e.target.value;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4"><button type="button" class="btn btn-outline-success" onClick={() => { this.add() }}>Thêm tin tức</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      );
  }
}

export default AddNew;
