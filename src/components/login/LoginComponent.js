import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@inject('store')
@observer
class LoginComponent extends Component {
  @observable data = {
    email: "",
    password: ""
  };

  render() {
    return (
      <div id="login">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
              <div className="register">
                <h4>Đăng nhập</h4>
                <form>
                  <div className="form-group" data-validate="Valid email is: a@b.c">
                    <input type="text" className="form-control" id="email" name="User" placeholder="Tài khoản" required="required" onChange={e => {
                      this.data.email = e.target.value;
                    }} />
                  </div>
                  <div className="form-group" data-validate="Enter password">
                    <input type="password" className="form-control" id="pw" name="pass" placeholder="Mật khẩu" required="required" onChange={e => {
                      this.data.password = e.target.value;
                    }} />
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-button"
                      onClick={() => {
                        this.props.history.push("/Admin");
                      }}>
                      Đăng nhập</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
