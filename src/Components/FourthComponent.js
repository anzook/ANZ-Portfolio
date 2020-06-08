import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import MediaQuery from 'react-responsive'


import ContactForm from './ContactForm';
// import Footer from './Footer';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="component fourth-component">
    <Container fluid>
  <Row className="justify-content-md-center fourth-component" >
    <Col className ="justify-content-center" >   
    <h3 className="contactText">Let's get in touch</h3>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
    <MediaQuery minDeviceWidth={500}>
      < ContactForm />
      </MediaQuery >
      <MediaQuery maxDeviceWidth={499}>
      <Button variant="dark" onClick={handleShow}>
        Drop me a line
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        < ContactForm />
      </Modal>
      </MediaQuery >
</div>
    <br/>
    <h3 className="contactText" >Connect with my Socials</h3>
    <div className="socialDiv"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }}>
   
          {/* <Button href="mailto:alexnzook@gmail.com?subject=Profile Inquiry">
            <FontAwesomeIcon icon={faHome} /> Email
          </Button> */}
          <Button variant="dark" href="https://github.com/anzook" target="_blank">
            <FontAwesomeIcon icon={faHome} /> GitHub
          </Button>
          <Button variant="dark" href="https://www.linkedin.com/in/alexnzook/" target="_blank">
            <FontAwesomeIcon icon={faHome} /> LinkedIn
          </Button>
          <Button variant="dark" href="">
            <FontAwesomeIcon icon={faHome} /> Twitter
          </Button>
          {/* <Button href="https://anzook.github.io/Portfolio/assets/files/ANZ_Engineering.pdf"
              target="_blank">   
                 <FontAwesomeIcon icon={faHome} /> Resume
          </Button> */}
    </div>

    </Col>
    </Row>
   
   
    </Container>
    </div>
  );
};
