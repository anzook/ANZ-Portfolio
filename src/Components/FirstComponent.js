// DEPRECIATED - condensed landing page and about, this component remains in case I would like to repurpose it

import React from "react";
import logo from './Logo/logo.svg';
import { Container, Row, Col, Media } from 'react-bootstrap';

export default () => {
  return (
<div className="component first-component">
<Container fluid>
  <Row className="justify-content-md-center">
    <Col className =""  md="auto">
    <Media>
    <img src={logo} className="align-self-center App-logo logo-main" alt="logo" />
    </Media>
    </Col>
    <Col className =""  md="auto">
    <Media>
    <Media.Body>
      <h5>Portfolio</h5>
      <p>
      As a Full Stack Software Developer, I look to design solutions that encompass the whole of a system. 
        With my experience as a professional engineer, I know how to consider problems holistically and find novel ways to address those challenges. 
        Earning a reputation among my peers as an intuitive leader, I can jump into any situation and add value through my teamwork, creativity, and technical abilities. Having successfully improved my organization’s communication skills and policy by establishing a data visualization center, I chose to foster my talents in software engineering.
      </p>
    </Media.Body>
    </Media>
     </Col>
   
  </Row>
</Container>
</div>

  );
};
