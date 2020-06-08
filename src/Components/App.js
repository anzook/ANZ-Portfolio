import React, { useState } from 'react';
import { Media, Container, Row, Col, Button, Nav, NavItem, Navbar } from "react-bootstrap";
import MediaQuery from 'react-responsive'

import ReactPageScroller from "./ReactPageScrollerSRC";
// import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import WelcomeLanding from "./WelcomeLanding";

import logo from './Logo/logo.svg';

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Pagination from "./Pagination";
// import FifthComponent from "./FifthComponent";
import './App.css';


export default function Portfolio(props) {
const [currentPage, setCurrentPage] = useState(0)
// const activePage = currentPage +1;

  const handlePageChange = number => {
   setCurrentPage( number ); // set currentPage number, to reset it from the previous selected.
  };

  // const getPagesNumbers = () => {
  //   const pageNumbers = [];
  //   const PageHeaders = ["Alex N Zook", "About", "Projects", "Contact"]
    
  //   for (let i = 1; i <= 4; i++) {
  //     pageNumbers.push(
  //       <Pagination.Item key={i} active={i === activePage} onClick={ () => handlePageChange(i-1)} className="pagination-item">
  //         {PageHeaders[i-1]}
  //       </Pagination.Item>,
  //     );
  //   }

  //   return [...pageNumbers];
  // };

    // const pagesNumbers = getPagesNumbers();

    return (
      <React.Fragment>

<Container fluid>
  <WelcomeLanding />
  <Row className="justify-content-md-center">
  <MediaQuery minDeviceWidth={925}>
  <Navbar bg="light" expand="lg" className="flex-column">

  <Nav activeKey={currentPage} className="flex-column">
  <Navbar.Brand href="#home">      <img
      src={logo}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="ANZ logo"
      /></Navbar.Brand>
  {/* <Nav.Link eventKey={0} disabled={0 === currentPage} onClick={ () => handlePageChange(0)} >ANZ</Nav.Link> */}
  <Nav.Link  eventKey={0} disabled={0 === currentPage} onClick={ () => handlePageChange(0)}>About</Nav.Link>
  <Nav.Link  eventKey={1} disabled={1 === currentPage} onClick={ () => handlePageChange(1)} >Projects</Nav.Link>
  <Nav.Link  eventKey={2}  disabled={2 === currentPage} onClick={ () => handlePageChange(2)}  >Contact</Nav.Link>
  </Nav>
  <Nav  className="nav-footer navbar-text small text-right justify-content-end" >
<div>
Alex N. Zook
</div>
<div >
<Nav.Link href="mailto:alexnzook@gmail.com?SUBJECT=Portfolio Inquiry" >Email <FontAwesomeIcon icon={faEnvelope} /></Nav.Link>
</div>
<div>
&copy; 2020
</div>
</Nav>
</Navbar>

</MediaQuery>
        <MediaQuery maxDeviceWidth={924}>
<Navbar bg="light" expand="xs">
  <Navbar.Brand >
  <span>Alex N Zook </span> 
  <img
      src={logo}
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt="ANZ logo"
      />
      <span> Portfolio</span>
     </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link   onClick={ () => handlePageChange(0)}>ANZ</Nav.Link> */}
      <Nav.Link   onClick={ () => handlePageChange(0)}>About</Nav.Link>
      <Nav.Link  onClick={ () => handlePageChange(1)}>Projects</Nav.Link>
      <Nav.Link  onClick={ () => handlePageChange(2)}>Contact</Nav.Link>
    </Nav>
    <Navbar.Text  className="navbar-text small text-right justify-content-end" >
Alex N. Zook  <a className="navbar-link-small" href="mailto:alexnzook@gmail.com?SUBJECT=Portfolio Inquiry" ><FontAwesomeIcon icon={faEnvelope} /> Email </a>  &copy; 2020 
</Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</MediaQuery>
    <Col className ="scrolling-content" >
    <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage} >
          {/* <FirstComponent /> */}
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          {/* <FifthComponent /> */}
        </ReactPageScroller>
     </Col>
  </Row>
</Container>
        
      </React.Fragment>
    );
  }




