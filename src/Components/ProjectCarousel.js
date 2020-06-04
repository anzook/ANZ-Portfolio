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

  // const ProjectItem = ({ project }) => {
  //   const openLink = e => {
  //     e.preventDefault();
  //     window.open(project.link, "_blank");
  //   };
  //   const openCode = e => {
  //     e.preventDefault();
  //     window.open(project.github, "_blank");
  //   };

  //   return (

  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src={project.image}
  //         alt={project.title}
  //       />
  //       <Carousel.Caption>
  //         <h3>{project.title}</h3>
  //         <div >
  //           {project.link ? <Button onClick={openLink}>Deployed Link</Button> : ""}
  //           {project.source ? (
  //             <Button onClick={openCode}>View on GitHub</Button>
  //           ) : (
  //               ""
  //             )}
  //         </div>
  //         <p>{project.desc}</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //   );
  // };

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
          <h3>{proj.title}</h3>
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
  {/* Demo components below */}

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/250"
          alt="YappE"
        />
        <Carousel.Caption>
          <h3>YappE</h3>
          <div >
            <Button >Deployed</Button>
              <Button >View on GitHub</Button>
          </div>
          <p>A social dog care web app</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}





