import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Design from "./images/image1.jpg";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="main-content">
          <Container id="container">
            <Row>
              <Col className="movedown" xs={12} md={1}></Col>
              <Col className="movedown" xs={12} md={6}>
                <div className="mainNav">
                
                  <div id="design" className="crunch">
                    <span className="numbers">01</span>
                    <span className="font-styling">DESIGN</span>
                  </div>
                  <div id="photo" className="crunch">
                    <span className="numbers">02</span>
                    <span className="font-styling">PHOTO</span>
                  </div>
                  <div id="video" className="crunch">
                    <span className="numbers">03</span>
                    <span className="font-styling">VIDEO</span>
                  </div>
                  <div id="music" className="crunch">
                    <span className="numbers">04</span>
                    <span className="font-styling">MUSIC</span>
                  </div>
                  <div id="image2"></div>
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

{
  /* <div id="image">hello</div>
                <div className="crunch">
                  <span className="numbers">01</span>
                  <span className="font-styling" id="design">DESIGN</span>
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
                </div> */
}
