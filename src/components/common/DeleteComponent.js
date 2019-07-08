import React, { Component } from "react";
import "./common.scss";
import {
  Paper,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide
} from "@material-ui/core";
import { observer } from "mobx-react";
import { observable } from "mobx";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
@observer
class DeleteComponent extends Component {
  @observable openDialog = false;
  constructor(props) {
    super(props);
    this.openDialog = this.props.openDialog;
  }
  handleCloseDialog = () => {
    this.openDialog = false;
  };
  showDialog = () => {
    // alert("1");
    this.openDialog = true;
  };
  render() {
    return (
      <Dialog
        open={this.openDialog}
        onClick={this.handleCloseDialog}
        // scroll={"paper"}
        // maxWidth={"sm"}
        // fullWidth={true}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogContent>
          <DialogContentText>
            <div className="text-center pt-4 px-5" style={{ color: "#000" }}>
              {this.props.title}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseDialog} color="" variant="contained">
            Hủy
          </Button>
          <Button
            onClick={() => {
              this.props.callBack("DELETE");
              this.handleCloseDialog();
            }}
            color="secondary"
            variant="contained"
          >
            {this.props.btnTitle || "Xóa"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default DeleteComponent;
