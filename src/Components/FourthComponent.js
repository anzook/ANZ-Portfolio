import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import ContactForm from './ContactForm';
import Footer from './Footer';

export default () => {
  return (
    <div className="component fourth-component">
    <Container fluid>
  <Row className="justify-content-md-center fourth-component">
    <Col className ="justify-content-center">   
    <h3>Let's get in touch</h3>
    < ContactForm />
    < Footer /> 

    </Col>
    </Row>
   
   
    </Container>
    </div>
  );
};
