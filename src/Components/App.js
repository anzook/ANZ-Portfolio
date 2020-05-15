import React, { useState } from 'react';
import { Pagination } from "react-bootstrap";

import ReactPageScroller from "./ReactPageScrollerSRC";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";
import './App.css';

export default function Portfolio(props) {
const [currentPage, setCurrentPage] = useState(0)
  
const PageHeaders = ["Landing", "Welcome", "Projects", "About", "Contact"]
  const handlePageChange = number => {
   setCurrentPage( number ); // set currentPage number, to reset it from the previous selected.
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];
    
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} eventKey={i - 1} onClick={ () => handlePageChange(i-1)}>
          {PageHeaders[i-1]}
        </Pagination.Item>,
      );
    }

    return [...pageNumbers];
  };

    const pagesNumbers = getPagesNumbers();

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage} >
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <FifthComponent />
        </ReactPageScroller>
        <Pagination className="pagination-additional-class" size="lg">
          {pagesNumbers}
        </Pagination>
      </React.Fragment>
    );
  }




