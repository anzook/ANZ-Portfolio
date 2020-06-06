import React, { useState } from 'react';
import { Pagination, Container, Row, Col, Button, Nav, NavItem, Navbar } from "react-bootstrap";
import MediaQuery from 'react-responsive'

import ReactPageScroller from "./ReactPageScrollerSRC";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
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
  <Row className="justify-content-md-center">
  <MediaQuery minDeviceWidth={850}>
  <Nav activeKey={currentPage} className="flex-column">
  <Nav.Link eventKey={0} disabled={0 === currentPage} onClick={ () => handlePageChange(0)} >ANZ</Nav.Link>
  <Nav.Link  eventKey={1} disabled={1 === currentPage} onClick={ () => handlePageChange(1)}>About</Nav.Link>
  <Nav.Link  eventKey={2} disabled={2 === currentPage} onClick={ () => handlePageChange(2)} >Projects</Nav.Link>
  <Nav.Link  eventKey={3}  disabled={3 === currentPage} onClick={ () => handlePageChange(3)}  >Contact</Nav.Link>
</Nav>
</MediaQuery>
        <MediaQuery maxDeviceWidth={850}>
<Navbar bg="light" expand="xs">
  <Navbar.Brand href="#home">Alex N Zook - Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link   onClick={ () => handlePageChange(0)}>ANZ</Nav.Link>
      <Nav.Link   onClick={ () => handlePageChange(1)}>About</Nav.Link>
      <Nav.Link  onClick={ () => handlePageChange(2)}>Projects</Nav.Link>
      <Nav.Link  onClick={ () => handlePageChange(3)}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</MediaQuery>

    <Col className ="scrolling-content" >
    <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage} >
          <FirstComponent />
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




