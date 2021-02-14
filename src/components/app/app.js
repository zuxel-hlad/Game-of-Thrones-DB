import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import { AppBlock } from "./AppBlock";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import { Button } from "reactstrap";
import ErrorMessage from "../errorMessage/errorMessage";

export default class extends Component {
  state = {
    showCharCard: true,
    error: false,
  };

  toggleRandomChar = () => {
    this.setState((state) => ({
      showCharCard: !state.showCharCard,
    }));
  };

  render() {
    const { showCharCard, error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }
    return (
      <AppBlock>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {showCharCard ? <RandomChar /> : null}
              <Button
                className="toggle-btn"
                color="secondary"
                onClick={this.toggleRandomChar}
              >
                Toggle random character
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </AppBlock>
    );
  }
}
