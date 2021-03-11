import React from "react";
import { PageNofFoundBlock } from "./pageNotFoundBlock";
import { Col, Row } from "reactstrap";

const PageNofFound = () => {
  return (
    <Row>
      <Col lg={{ size: 5, offset: 0 }}>
        <PageNofFoundBlock>
          <a href="/books">
            <i className="far fa-times-circle" />
          </a>
          <h1>Page not found</h1>
        </PageNofFoundBlock>
      </Col>
    </Row>
  );
};

export default PageNofFound;
