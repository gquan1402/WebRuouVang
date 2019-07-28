import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { GetNews } from "../../api/index";
@inject('store')
@observer
class SalesAdmin extends Component {
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
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToAdmin("Sales", "/SalesAdmin") }}>Sales</li>
                  </ul>
                  <ul class="list-unstyled menu1">
                    <li onClick={() => { this.goToAdmin("Managers", "/managers") }}>Quản lý</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-12">
                  <form>
                    <div className="form-group">
                      <label for="formGroupExampleInput">Tên khuyến mại</label>
                      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Sale mùa hè" />
                    </div>
                    <div className="form-group">
                      <label for="formGroupExampleInput2">Discount</label>
                      <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="25%" />
                    </div>
                    <div className="form-group">
                      <label for="formGroupExampleInput">Ngày kết thúc</label>
                      <input type="date" className="form-control" id="formGroupExampleInput" placeholder="07/30/2019" />
                    </div>
                    <div className="form-group">
                      <label for="formGroupExampleInput2"></label>
                      <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="09/30/2019" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4"><button type="button" class="btn btn-danger" onClick={() => { this.props.store.tempAlert("Đã tạm dừng khuyến mại!", 1000); }}>Tạm dừng</button></div>
                <div className="col-sm-4"><button type="button" class="btn btn-primary" onClick={() => { this.props.store.tempAlert("Đã bật khuyến mại!", 1000); }}>Bật</button></div>
                <div className="col-sm-4"><button type="button" class="btn btn-success" onClick={() => { this.props.store.tempAlert("Cập nhật khuyến mại thành công!", 1000); }}>Cập nhật</button></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default SalesAdmin;