import React from 'react';
import {Container, Row, Col, Image} from 'reactstrap'
import '../PersonalInfo/WorkExperience.css'

const WorkExperience = () => {
    return ( 
        <Container>
            <br></br>
            <Row>
                <Col md={3}>
                 <strong className='work-title'>Work Experience</strong>   
                </Col>
                <Col md={9}>
                    <strong className='fancy-big'>
                        What I'm currently doing...
                    </strong>
                    <p className='subtitle'>Environmental Specialist, Triumvirate Environmental</p>
                    <p>
                        Since the outset of the current Covid-19 Pandemic, I have worked with a phenomenal group of individuals within the Environmental Health, and Medical Safety field in an effort to aid in the Pandemic Relief Effort. 
                        I have travelled to over 9 hospitals in the NYC Metro/ Long Island areas, and administered over 3000 NIOSH Certified Fitness Exams to Nurses, Doctors, and Health Professionals.
                        I also led the project team to digitize all transcripts of past fitness tests, which has led to a remarkable increase in efficiency and record retrieval across multiple Mount Sinai Hospital locations.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                 <strong className='work-title'>Target Employment</strong>   
                </Col>
                <Col md={9}>
                    <strong className='fancy-big'>
                        Where I will be in one year's time...
                    </strong>
                    <p className='subtitle'>Full Stack Developer</p>
                    <p>
                       My passion is in people! I found that I have thrived the most in high energy environments, surrounded by people also pursuing their passion. 
                       Outside of company culture, what I am really searching for is a role that deals in the forefront of technological development and machine learning! My brain has always been ambitiously logically driven, and I'd like to apply this understanding of complex problem solving and object oriented thinking to craft future technologies that redefine our perception of learning!
                    </p>
                </Col>
            </Row>
        </Container>
     );
}
 
export default WorkExperience;