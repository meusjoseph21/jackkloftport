import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Design from "./images/image1.jpg";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="main-content">
          <Container>
            <Row>
              <Col className="movedown" xs={12} md={1}></Col>
              <Col className="movedown" xs={12} md={6}>
                <div className="z">
                  <div id="images">
                    <span className="hide">
                      THIS IS IMAGE FILLER TO MAKE IT WORK I THINK I CAN DO THIS
                    </span>
                  </div>
                </div>
                <div className="crunch" id="design">
                  <span className="numbers">01</span>
                  <span className="font-styling">DESIGN</span>
                </div>
                <div className="crunch">
                  <span className="numbers">02</span>
                  <span className="font-styling" id="photo">
                    PHOTO
                  </span>
                </div>

                <div className="crunch">
                  <span className="numbers">03</span>
                  <span className="font-styling" id="video">
                    VIDEO
                  </span>
                </div>
                <div className="crunch">
                  <span className="numbers">04</span>
                  <span className="font-styling" id="music">
                    MUSIC
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Main;
