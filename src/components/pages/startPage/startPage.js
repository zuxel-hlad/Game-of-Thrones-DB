import React, { Component } from "react";
import { StartPageBlock } from "./startPgeBlock";
import { Button } from "reactstrap";

export default class StartPage extends Component {
  state = {
    modal: true,
  };

  startGame = () => {
    this.setState({
      modal: !true,
    });
  };
  
  render() {
    const { modal } = this.state;
    const content = (
      <div className="modal">
        <Button color="primary" onClick={this.startGame}>
          Let's start?
        </Button>
      </div>
    );
    return <StartPageBlock>{modal ? content : null}</StartPageBlock>;
  }
}
