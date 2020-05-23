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
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
    </Media>
     </Col>
   
  </Row>
</Container>
</div>

  );
};
