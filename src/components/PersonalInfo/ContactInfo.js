import React from 'react';
import '../PersonalInfo/ContactInfo.css'
import {Container, Row, Col, Image} from 'reactstrap'

const ContactPage = () => {
    return ( 
        <Container className='contact-page'>
            <Row>
            <Col md={6}>
            <h3>Contact Information</h3>
            <br></br>
            <Row>
               <Col md={6}>
                   <strong>
                       Location
                   </strong>
                   <p>
                       NYC Metro and Long Island
                   </p>
                   <p className='fancy'>
                        OPEN TO RELOCATION
                   </p>
               </Col>
               <Col md={6}>           
                        <strong>
                            Lets Get in Touch!
                        </strong>
                        <p>
                        Email; nicholasgalante1997@gmail.com 
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/nicholas-galante-1963041a2/">LinkedIn</a>
                        </p>
               </Col>
            </Row>
            </Col>
            <Col md={6}>
                <h3>Education</h3>
                <br></br>
                <strong className='bold'>
                    Flatiron School 
                </strong>
                <small className='fancy'> Software Engineering Immersive Bootcamp</small>
                <p className='fancy'>May 2020 - August 2020</p>
                <p>Developed an understanding of core CS priniples, specifically Complex Data Structures and Object Oriented Programming.</p>
                <strong className='bold'>
                    SUNY Binghamton 
                </strong>
                <small className='fancy'> Harpur College</small>
                <p className='fancy'>Aug 2015 - May 2019</p>
                <p>B.A. in Psychology, B.A. in English Literature</p>
            </Col>
            </Row>
        </Container>
     );
}
 
export default ContactPage;