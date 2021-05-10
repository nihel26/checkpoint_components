import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import ProfilePhoto from "./ProfilePhoto";
import FullName from "./FullName";
import Address from "./Address";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ Padding: "20px", marginTop: "20px" }}>
            <ProfilePhoto />
          </Col>
          <Col style={{ Padding: "20px", marginTop: "40px", color: "white" }}>
            <FullName />
          </Col>
          <Col style={{ marginTop: "40px", color: "white" }}>
            {" "}
            <Address />{" "}
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: "40px"}}>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
