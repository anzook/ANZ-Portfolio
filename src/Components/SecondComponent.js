import React from "react";
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

export default () => {
  return (
    <div className="component second-component">
      <Container fluid>
  <Row className="justify-content-md-center">
    <Col className="text-center"  md="auto">
    <h2>Alex N. Zook - Portfolio</h2>
    <hr/>
<h3>As an engineer, I design solutions for people.</h3>
<hr/>
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="justify-content-md-center">
    <Col xs={2} >
      <Nav variant="dark" className="flex-column navbar-dark">
        <Nav.Item>
          <Nav.Link eventKey="first">I Create...</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">I Build...</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">I Collaborate...</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9} className="text-left">
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h4>Using a diverse skillset and background, I create solutions for any challenge that comes my way.</h4>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h4>As a full-stack engineer, I use my software tools to develop practical, engaging, and fuctional products.</h4>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <h4>Whether my team is in a boat rowing with me or coding a project, I am in the trenches as a technical asset and moralizer.</h4>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
<br/>
<p>Welcome to a small piece of my story. If you'd like me to be a part of your story, please contact me.</p>
<p>Currently seeking software devloper opportunities in the Philadelphia area.</p>
</Col>
  
    </Row>
    </Container>
    </div>
  );
};
