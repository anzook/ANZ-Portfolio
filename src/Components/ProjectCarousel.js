import React, { useState } from 'react';
import { Carousel, Button } from "react-bootstrap";

import './App.css';
import './Carousel.css';
import { projects } from "./Projects";



export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {projects.map(proj => (
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={proj.image}
          alt={proj.title}
        />
        <Carousel.Caption>
          <p>{proj.title}</p>
          <div >
            {proj.link ? <Button href={proj.link} target="_blank" >Deployed Link</Button> : ""}
            {proj.source ? (
              <Button href={proj.source} target="_blank">View on GitHub</Button>
            ) : (
                ""
              )}
          </div>
          <p>{proj.desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      </Carousel>
      
    
  );
}





