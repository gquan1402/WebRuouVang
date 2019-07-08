import React, { Component } from "react";
import "./login.scss";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Link } from "react-router-dom";
@observer
class FooterComponent extends Component {
  @observable data = {
    email: "",
    password: ""
  };

  render() {
    return (
            <div className="container">
                
            </div>
        );
      }
    }
    
export default FooterComponent;
