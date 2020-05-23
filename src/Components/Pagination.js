import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from './Logo/logo.svg';

import './App.css';

export default function Pagination(props) {
const [currentPage, setCurrentPage] = useState(0)
let active = currentPage +1;
  const handlePageChange = number => {
   setCurrentPage( number ); // set currentPage number, to reset it from the previous selected.
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];
    const PageHeaders = ["Alex N Zook", "About", "Projects", "Contact"]
    
    for (let i = 1; i <= 4; i++) {
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
     <Col >
  <ul className="pagination-additional-class">
      <li key={1} active={1 === active} onClick={ () => handlePageChange(0)} className="pagination-item">
      <img src={logo} className="align-self-center App-logo logo-main" alt="logo" /> 
      ANZ
      </li>
      <li key={2} active={2 === active} onClick={ () => handlePageChange(1)} className="pagination-item">
 About
      </li>
      <li key={3} active={3 === active} onClick={ () => handlePageChange(2)} className="pagination-item">
 Projects
      </li>
      <li key={4} active={4 === active} onClick={ () => handlePageChange(3)} className="pagination-item">
 Contact
      </li>
        </ul>
    </Col>
  </Row>
</Container>
        
      </React.Fragment>
    );
  }




