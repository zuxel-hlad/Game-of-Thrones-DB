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
import BooksItem from "../pages/booksItem";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
        <AppBlock className="app">
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

            <Route path="/characters" component={CharacterPage} />
            <Route path="/houses" component={HousesPage} />
            <Route path="/books" exact component={BooksPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BooksItem bookId={id} />;
              }}
            />
          </Container>
        </AppBlock>
      </Router>
    );
  }
}
