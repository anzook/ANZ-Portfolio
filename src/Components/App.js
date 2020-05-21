import React, { useState } from 'react';
import { Pagination, Container, Row, Col } from "react-bootstrap";

import ReactPageScroller from "./ReactPageScrollerSRC";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";
import './App.css';

export default function Portfolio(props) {
const [currentPage, setCurrentPage] = useState(0)
let active = currentPage +1;
  const handlePageChange = number => {
   setCurrentPage( number ); // set currentPage number, to reset it from the previous selected.
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];
    const PageHeaders = ["Landing", "Welcome", "Projects", "About", "Contact"]
    
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} active={i === active} onClick={ () => handlePageChange(i-1)} className="pagination-item">
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

    <Col className ="scrolling-content"  md="auto">
    <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage} >

          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <FifthComponent />
        </ReactPageScroller>
     </Col>
     <Col >
  <Pagination className="pagination-additional-class">
  {/* <Pagination.Prev /> */}
          {pagesNumbers}
          {/* <Pagination.Next /> */}
        </Pagination>
    </Col>
  </Row>
</Container>
        
      </React.Fragment>
    );
  }




