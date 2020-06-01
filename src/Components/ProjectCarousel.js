import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";

import './App.css';

export default function ProjectCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                // className="d-block w-100 h-100"
                src="https://via.placeholder.com/250"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>YappE</h3>
                <p>A social dog care application</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/250"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/250"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
      




