import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";

import './App.css';
import './Footer.css';


function Footer() {
    return (
        <div className="footer" >
            <div className="footerText">
        Alexander N. Zook  &copy; 2020
        {/* <i className="material-icons footer-icon">
          mail_outline
        </i> alexnzook@gmai.com <i className="material-icons footer-icon">
          phone
        </i> 717-519-9938
        <span id="footer-legal" className="footer-text footer-icon"> */}
        
        {/* </span>            */}
            </div>
        </div>
    )
}

export default Footer

