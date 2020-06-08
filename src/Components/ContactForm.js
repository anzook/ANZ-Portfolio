import React, { useState, useEffect } from 'react';
import { Form, Col, Button } from "react-bootstrap";

import './App.css';
import './Contact.css';



export default function ProjectCarousel() {
        const [index, setIndex] = useState(0);
        // const [isComplete, setComplete] = useState(false);

        function simulateNetworkRequest() {
          return new Promise((resolve) => setTimeout(resolve, 2000));
        }
        
        function LoadingButton() {
          const [isLoading, setLoading] = useState(false);

          useEffect(() => {
            if (isLoading) {
              simulateNetworkRequest().then(() => {
                setLoading(false);
              });
            }
          }, [isLoading]);
        
          const handleClick = () => setLoading(true);
        
          return (
            <Button
              variant="dark"
              type="submit"
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? 'Sending…' : 'Send'}
            </Button>
          );
        }
          return (

            <Form className="justify-content-md-center" autocomplete="on">
  <Form.Group controlId="formBasicEmail">
  <Form.Row>
    <Col>
    <Form.Label for="fname">First name</Form.Label>
      <Form.Control placeholder="First name" type="text" id="fname" name="fname"/>
    </Col>
    <Col>
    <Form.Label for="lname">Last name</Form.Label>
      <Form.Control placeholder="Last name" type="text" id="lname" name="lname"/>
    </Col>
  </Form.Row>
    <Form.Label for="email">Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id="email" name="email"/>
    <Form.Text className="text-muted">
      Don't worry, this just goes to me, not a mailing list
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="2" placeholder="Drop me a message"/>
  </Form.Group>
  <Form.Row>
    <Col>
    <Form.Group controlId="formCheckbox">
    <Form.Check type="checkbox" label="Resume request" />
  </Form.Group>
    </Col>
    <Col>
  {LoadingButton()}
    </Col>
    </Form.Row>
</Form>
        );
      }
      




