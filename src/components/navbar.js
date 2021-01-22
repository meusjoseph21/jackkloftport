import React, { Component } from "react";
import { Container, Navbar, Row, Col, Nav } from "react-bootstrap";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <h3 className="navbar-text1">JACK KLOFT</h3>
          </Col>
          <Col xs={12} md={6}>
            <Nav className="justify" as="ul">
              <Nav.Item as="li">
                <button className="navbar-text">HOME</button>
              </Nav.Item>
              <Nav.Item as="li">
                <button className="navbar-text">ABOUT</button>
              </Nav.Item>
              <Nav.Item as="li">
                <button className="navbar-text">CONTACT</button>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
