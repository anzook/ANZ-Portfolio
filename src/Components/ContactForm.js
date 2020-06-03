import React, { useState } from 'react';
import { Form, Col, Button } from "react-bootstrap";

import './App.css';
import './Contact.css';



export default function ProjectCarousel() {
        const [index, setIndex] = useState(0);
        
          return (

            <Form className="justify-content-md-center" >
  <Form.Group controlId="formBasicEmail">
  <Form.Row>
    <Col>
    <Form.Label>First name</Form.Label>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
    <Form.Label>Last name</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      This goes to a single human, not a mailing list- don't worry.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="2" />
  </Form.Group>
  <Form.Row>
    <Col>
    <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Resume request" />
  </Form.Group>
    </Col>
    <Col>
    <Button variant="primary" type="submit">
    Send
  </Button>
    </Col>
    </Form.Row>
</Form>
        );
      }
      




