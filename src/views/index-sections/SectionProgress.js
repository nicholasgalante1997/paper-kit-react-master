/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionProgress() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
        <Container>
          <Row>
            <Col md="6">
              <div className="title">
                <h3>Technical Skills and Proficiencies</h3>
                <br />
              </div>
              <label>Ruby on Rails</label>
              <Progress
                max="100"
                value="95"
                barClassName="progress-bar-danger"
              />
              <br />
              <label>Javascript</label>
              <Progress max="100" value="90" barClassName="progress-bar-info" />
              <br />
              <label>React.js</label>
              <Progress
                max="100"
                value="90"
                barClassName="progress-bar-primary"
              />
              <br />
              <label>CSS</label>
              <Progress
                max="100"
                value="85"
                barClassName="progress-bar-success"
              />
              <br /> 
              <label>Python</label>
              <Progress
                max="100"
                value="60"
                barClassName="progress-bar-warning"
              />
              <br />
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Publications</h3>
                <br />
              </div>
              <Row>
                <Col md={4}>
                
                  <a href="https://medium.com/dev-genius/building-associations-in-object-oriented-ruby-letting-common-sense-make-sense-e7ab3d357886">
                  <strong className="images-title">
                  Building Associations in Object Oriented Ruby
                  </strong>
                  </a>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src='https://miro.medium.com/max/1400/0*tVa7gQSABtUJXSTF'
                />
                </Col>
                <Col md={4}>
                
                <a href="https://blog.usejournal.com/why-do-you-div-me-up-understanding-html-div-in-the-context-of-twitter-bootstrap-c2747474debc">
                <strong className="images-title">
                Understanding HTML Div in the Context of Twitter Bootstrap
                </strong>
                </a>
              <img
                alt="..."
                className="img-thumbnail img-responsive"
                src='https://miro.medium.com/max/1400/1*m_xsCxJ23h0jAwZCSPtS9Q.gif'
              />
              <Row>
                 
              <a href="https://medium.com/@nicholasgalante1997/programming-a-search-bar-in-react-js-a-ui-for-the-generation-that-has-no-clue-what-it-wants-2891fd980c47">
                <strong className="images-title">
                Programming A Search Bar in React.js
                </strong>
                </a>
              <img
                alt="..."
                className="img-thumbnail img-responsive"
                src='https://miro.medium.com/max/1400/1*JHRgpdnIX7ILvaX-KR7hvQ.png'
              />
              </Row>
              </Col>
              <Col md={4}>
                
                  <a href="https://medium.com/@nicholasgalante1997/faker-it-til-you-make-r-it-an-exploration-in-efficiency-in-rails-development-11942ed63e8b">
                  <strong className="images-title">
                  Faker It Til You Make-r It; An Exploration in Efficiency in Rails Development
                  </strong>
                  </a>
                  <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src='https://miro.medium.com/max/1400/1*8k96G62EqbyEDX0q29GHog.png'
                />
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src='https://miro.medium.com/max/1400/1*fmJv_4Smwxf3KKAVImZ6Vg.jpeg'
                />
                </Col>
              </Row>
            </Col>
          </Row>
          
        </Container>

    </>
  );
}

export default SectionProgress;
