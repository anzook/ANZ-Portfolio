import React, { useState } from 'react';
import { Pagination, Container, Row, Col, Button } from "react-bootstrap";
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
const activePage = currentPage +1;

  const handlePageChange = number => {
   setCurrentPage( number ); // set currentPage number, to reset it from the previous selected.
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];
    const PageHeaders = ["Alex N Zook", "About", "Projects", "Contact"]
    
    for (let i = 1; i <= 4; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} active={i === activePage} onClick={ () => handlePageChange(i-1)} className="pagination-item">
          {PageHeaders[i-1]}
        </Pagination.Item>,
      );
    }

    return [...pageNumbers];
  };

    const pagesNumbers = getPagesNumbers();

    return (
      <React.Fragment>
<Container fluid>
  <Row className="justify-content-md-center">
  <Col className="sideBar">
  <MediaQuery minDeviceWidth={950}>
  <div className="pagination-additional-class">
      <Button variant="outline-dark" key={1} active={1 === activePage} onClick={ () => handlePageChange(0)} className="pagination-item">
      {/* <img src={logo} className="align-self-center App-logo logo-main" alt="logo" />  */}
      ANZ
      </Button>
      <Button variant="outline-dark" key={2} active={2 === activePage}  onClick={ () => handlePageChange(1)} className="pagination-item">
   About
      </Button>
      <Button variant="outline-dark" key={3} active={3 === activePage} onClick={ () => handlePageChange(2)} className="pagination-item">
     Projects
      </Button>
      <Button variant="outline-dark" key={4} active={4 === activePage} onClick={ () => handlePageChange(3)} className="pagination-item">
    Contact
      </Button>
        </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={400} maxDeviceWidth={950}>
  <div className="pagination-additional-class-small">
      <Button variant="outline-dark" key={1} active={1 === activePage} onClick={ () => handlePageChange(0)} className="pagination-item-small">
      {/* <img src={logo} className="align-self-center App-logo logo-main" alt="logo" />  */}
      1
      </Button>
      <Button variant="outline-dark" key={2} active={2 === activePage}  onClick={ () => handlePageChange(1)} className="pagination-item-small">
   2
      </Button>
      <Button variant="outline-dark" key={3} active={3 === activePage} onClick={ () => handlePageChange(2)} className="pagination-item-small">
     3
      </Button>
      <Button variant="outline-dark" key={4} active={4 === activePage} onClick={ () => handlePageChange(3)} className="pagination-item-small">
    4
      </Button>
        </div>
        </MediaQuery>
  </Col >
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
  {/* <Pagination className="pagination-additional-class">
          {pagesNumbers}
        </Pagination> */}
    {/* <Pagination /> */}

  </Row>
</Container>
        
      </React.Fragment>
    );
  }




