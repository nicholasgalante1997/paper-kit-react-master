import React from 'react'; 
import {Container, Row, Col, Image} from 'reactstrap'
import '../PersonalInfo/AboutPage.css'

const AboutPage = () => {
    return ( 
        <Container>
            <Row>
                <Col md={4}>
                <h4 className="images-title">A Little About Me</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src='https://media-exp1.licdn.com/dms/image/C4D03AQH6Tl_mqD7vGw/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=uhyBk0dn9Bfbz3Gi0mgiTInE9OUHIA5HdqL4Bdxw1OM'
                />
                </Col>
                <Col md={8} className='personal-statememnt-col'>
                    <Row>
                        <h3 className='ps-title'>Personal Statement</h3>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                    <strong>
                            Hello World! My name is Nicholas Joseph Galante, but you can just call me Nick. I am a recent graduate from SUNY Binghamton in upstate New York, where I earned a Bachelor's in Applied Behavioral Analysis in Psychology, and English Literature. I'm an even more recent graduate from the Flatiron School Manhattan Campus, studying Full Stack Development and Software Engineering.
                    </strong>
                    <h6 className='fancy'>
                    <br></br>
                        The Highlights;
                    </h6>
                    <br></br>
                    </Row>
                    <Row>
                        <ul>
                            <li>
                                <h7 className='fancy'>Passionate Conversationalist; </h7>
                                <p>I love all things React.js, Ruby on Rails, Python3, or anything written by Joseph Heller or Albert Camus!
                                But what really gets my fire going is passionate individuals! So lets chat about some of your passions! Or better yet, lets chat about your favorite book and what it says about you!</p>
                            </li>
                            <li>
                                <h7 className='fancy'>Avid Learner; </h7>
                                <p>Have you ever heard of the phrase, "you can lead a horse to water, but you can't make him drink?"
                                     Well, I'll tell you now, you can lead Nick Galante to the library, but you can't make him leave.
                                        Really, I am perhaps most passionate about learning. This entire ontological experience is such an enigmatic gift that
                                      I really feel that there won't be a day in my life where I won't be actively seeking to better myself and my understanding of the world. So stop in and teach me something!</p>
                            </li>
                        </ul>
                    </Row>
                </Col>
            </Row>
        </Container>
     );
}
 
export default AboutPage;