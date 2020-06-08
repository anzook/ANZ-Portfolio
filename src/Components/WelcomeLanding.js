import React, { useState, useEffect } from 'react';
import { Modal, Media } from "react-bootstrap";
import { gsap } from 'gsap';
import './App.css';
import logo from './Logo/logo.svg';

// import './Landing.css';



export default function WelcomeLanding() {
    const [show, setShow] = useState(true);

setTimeout(function() {setShow(false)}, 2700);

useEffect(() => {
  gsap.to("#SVGlogo", {duration: 2, rotationY: 360});
});

  return (  <Modal
    size="md"
    show={show}
    onHide={() => setShow(false)}
    delay={3000} autohide
    aria-labelledby="example-modal-sizes-title-lg"
    centered
    >
    {/* <Modal.Header closeButton> */}
    {/* <Modal.Header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }} >
      <Modal.Title  id="example-modal-sizes-title-lg"  >
Welcome - ANZ - Portfolio      </Modal.Title>
    </Modal.Header> */}
    <Modal.Body className="socialDiv"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }}>
    <Media>
    <img src={logo} id='SVGlogo' className="align-self-center App-logo logo-main" alt="logo" />
    </Media>
    </Modal.Body>
    </Modal>

  );
}




