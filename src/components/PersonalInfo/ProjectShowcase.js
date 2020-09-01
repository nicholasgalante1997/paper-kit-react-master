import React from 'react';
import {Container, Row, Col, Image} from 'reactstrap'

const ProjectShowcase = () => {
    return ( 
        <Container>
            <br></br>
            <h4>Recent Projects and Application Demos</h4>
            <br></br>
            <Row>
                <Col md={6}>
                <Row>
                <Col md={3}>
                    <a href="https://www.youtube.com/watch?v=DNGGaqdbWFs">
                <img
                alt="..."
                style={{height:100}}
                className="img-thumbnail img-responsive"
                src={require("assets/img/project_thumbnail/pear.png")}
              />
              </a>
                </Col>
                    <Col md={9}>
                        <h6>
                            PearProgramming 
                        </h6>
                        <p>
                           Made with Ruby on Rails and React-Redux, provides users with a one stop experience to try out new code challenges alongside other users, share insights, make friends and track their progress!  
                        </p>
                    </Col>
                </Row>
                </Col>
                <Col md={6}>
                <Row>
                <Col md={3}>
                    <a href='https://www.youtube.com/watch?v=untQI57p3y0'>
                <img
                alt="..."
                className="img-thumbnail img-responsive"
                style={{height:100}}
                src={require("assets/img/project_thumbnail/lib.png")}
              />
              </a>
                </Col>
                    <Col md={9}>
                        <h6>
                           Alexandria
                        </h6>
                        <p>
                           Just as good as the old library with half the fire liability! Come join our community of Devs and start learning a new library today! Structured with Ruby on Rails, and React-Router.
                        </p>
                    </Col>
                </Row>
                </Col>
            </Row>
            <br></br>
        </Container>
     );
}
 
export default ProjectShowcase;