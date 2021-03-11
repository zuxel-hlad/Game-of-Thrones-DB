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
import PageNofFound from "../pages/pageNotFound/pageNotFound";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartPage from "../pages/startPage";

export default class App extends Component {
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
        <AppBlock>
          <Route exact path="/startpage" component={StartPage} />
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                {showRandomChar ? <RandomChar interval={1500} /> : null}
                <Button
                  color="primary"
                  className="toggle-btn"
                  onClick={this.toggleRandomChar}
                >
                  Toggle random character
                </Button>
              </Col>
            </Row>
            <Route exact path="/characters" component={CharacterPage} />
            <Route exact path="/houses" component={HousesPage} />
            <Route exact path="/books" component={BooksPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return id <= 10 ? <BooksItem bookId={id} /> : <PageNofFound />;
              }}
            />
          </Container>
        </AppBlock>
      </Router>
    );
  }
}
