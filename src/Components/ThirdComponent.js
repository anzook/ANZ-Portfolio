import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import ProjectCarousel from './ProjectCarousel';


export default () => {
  return (
    <div className="component third-component">
 <Container fluid>
  <Row className="justify-content-md-center">
    <Col className =""  md="auto">   
    <h3>Projects</h3>
       <ProjectCarousel />
    </Col>
    </Row>
    </Container>
     </div>
  );
};
