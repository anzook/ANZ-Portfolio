import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

import ContactForm from './ContactForm';
import Footer from './Footer';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <div className="component fourth-component">
    <Container fluid>
  <Row className="justify-content-md-center fourth-component">
    <Col className ="justify-content-center">   
    <h3>Let's get in touch</h3>
    < ContactForm />
    <br/>
    <h3>Connect with my Socials</h3>
    <div className="socialDiv">
   
          {/* <Button href="mailto:alexnzook@gmail.com?subject=Profile Inquiry">
            <FontAwesomeIcon icon={faHome} /> Email
          </Button> */}
          <Button href="https://github.com/anzook" target="_blank">
            <FontAwesomeIcon icon={faHome} /> GitHub
          </Button>
          <Button href="https://www.linkedin.com/in/alexnzook/" target="_blank">
            <FontAwesomeIcon icon={faHome} /> LinkedIn
          </Button>
          <Button href="">
            <FontAwesomeIcon icon={faHome} /> Twitter
          </Button>
          {/* <Button href="https://anzook.github.io/Portfolio/assets/files/ANZ_Engineering.pdf"
              target="_blank">   
                 <FontAwesomeIcon icon={faHome} /> Resume
          </Button> */}
    </div>
    < Footer /> 

    </Col>
    </Row>
   
   
    </Container>
    </div>
  );
};
