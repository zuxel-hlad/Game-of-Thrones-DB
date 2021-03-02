import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import { AppBlock } from "./AppBlock";
import Header from "../header";
import RandomChar from "../randomChar";
import { Button } from "reactstrap";
import CharacterPage from "../pages/characterPage/characterPage";
import ErrorMessage from "../errorMessage/errorMessage";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";

export default class extends Component {

  state = {
    showRandomChar: true,
    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => ({
      showRandomChar: !state.showRandomChar,
    }));
  };

  render() {
    const { showRandomChar, error } = this.state;

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
              {showRandomChar ? <RandomChar /> : null}
              <Button
                color="primary"
                className="toggle-btn"
                onClick={this.toggleRandomChar}
              >
                Toggle random character
              </Button>
            </Col>
          </Row>
          <CharacterPage />
          <BooksPage/>
          <HousesPage/>
        </Container>
      </AppBlock>
    );
  }
}
