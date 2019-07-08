import React, { Component } from "react";
import "./common.scss";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
const styles = {
  root: {
    flexGrow: 1,
    overflow: "hidden"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menu: {
    width: "100%",
    maxWidth: 360
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 20px"
  }
};

@observer
class MenuComponent extends Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
    return (
      <div>
        <List component="nav">
          {/* <NavLink to="/news" activeClassName="active">
          <ListItem button>
            <ListItemText primary="Trang chủ" />
          </ListItem>
          </NavLink> */}

          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Chiến dịch" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink
                to="/campaign-overview"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemText
                    inset
                    primary="Tổng quan"
                    style={{ paddingLeft: "25px" }}
                  />
                </ListItem>
              </NavLink>
              <NavLink
                to="/campaign-setting"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <ListItem button className={styles.nested}>
                  <ListItemText
                    inset
                    primary="Cài đặt chiến dịch"
                    style={{ paddingLeft: "25px" }}
                  />
                </ListItem>
              </NavLink>
              <NavLink
                to="/campaign-country"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <ListItem button className={styles.nested}>
                  <ListItemText
                    inset
                    primary="Địa điểm"
                    style={{ paddingLeft: "25px" }}
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>
          <NavLink
            to="/apps"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            <ListItem button>
              <ListItemText primary="Ứng dụng" />
            </ListItem>
          </NavLink>

          <NavLink
            to="/account"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            <ListItem button>
              <ListItemText primary="Tài khoản" />
            </ListItem>
          </NavLink>
        </List>
      </div>
    );
  }
}

export default MenuComponent;
