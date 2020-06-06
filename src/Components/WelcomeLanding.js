import React, { useState } from 'react';
import { Modal, Media } from "react-bootstrap";

import './App.css';
import logo from './Logo/logo.svg';

// import './Landing.css';



export default function WelcomeLanding() {
    const [show, setShow] = useState(true);

setTimeout(function() {setShow(false)}, 3000);


  return (  <Modal
    size="lg"
    show={show}
    onHide={() => setShow(false)}
    delay={3000} autohide
    aria-labelledby="example-modal-sizes-title-lg"
    >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
Alex N Zook - Portfolio      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Media>
    <img src={logo} className="align-self-center App-logo logo-main" alt="logo" />
    </Media>
    </Modal.Body>
    </Modal>

  );
}




