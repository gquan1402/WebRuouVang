import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
@observer
class ContactComponent extends Component {
  @observable data = {
    email: '',
    password: ''
  };

  render() {
    return (
      <div id="contact" className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner_product">
                <img src="./../../images/banner_product.jpg" className="img-responsive" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="title_page">
                <ul className="list-inline">
                  <li>
                    Trang chủ
                  </li>
                  <li>
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </li>
                  <li>Liên hệ</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row tt-lienhe">
            <div className="col-sm-5">
              <h3>
                <strong>Shop Rượu Vang HQT</strong>
              </h3>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true" /> Trường Đại Học Công Nghiệp Hà Nội, Từ Liêm,
                Hà Nội.
              </p>
              <p>
                <i className="fa fa-phone-square" aria-hidden="true" />
                0386451313
              </p>
              <p>
                <i className="fa fa-envelope-square" aria-hidden="true" /> Gquan1402@gmail.com
              </p>
              <p>
                <i className="fa fa-chrome" aria-hidden="true" />
                FB
              </p>
            </div>
            <div className="col-sm-7">
              <form
                className="form-group form-contact"
                role="form"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <div className="item-contact">
                      <label for="ho-ten">Họ và tên*:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ho-ten"
                        name="name"
                        required
                        placeholder="Họ và tên"
                      />
                    </div>
                    <div className="item-contact">
                      <label for="mail">Email*:</label>
                      <input type="mail" className="form-control" id="mail" name="email" required placeholder="Email" />
                    </div>
                    <div className="item-contact">
                      <label for="sdt">Số điện thoại:</label>
                      <input type="number" className="form-control" id="sdt" name="phone" placeholder="Số điện thoại" />
                    </div>
                    <div className="item-contact">
                      <label for="dia-chi">Địa chỉ:</label>
                      <input type="text" className="form-control" id="dia-chi" name="Address" placeholder="Địa chỉ" />
                    </div>
                    <div className="item-contact">
                      <label for="request" className="request">
                        Ý kiến của bạn*:
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="request"
                        name="contact"
                        placeholder="Ý kiến của bạn"
                        rows="6"
                        required
                      />
                    </div>
                    <div className="gui">
                      <input type="submit" className="btn btn-button btn-gui" value="Gửi" />
                      <input type="reset" className="btn btn-default" value="Reset" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactComponent;
