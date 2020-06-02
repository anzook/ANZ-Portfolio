import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";

import './App.css';
import './Carousel.css';
import { projects } from "./Projects";



export default function ProjectCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        const ProjectItem = ({ project }) => {
          const openLive = e => {
            e.preventDefault();
            window.open(project.link, "_blank");
          };
          const openSource = e => {
            e.preventDefault();
            window.open(project.github, "_blank");
          };
        
          return (

            <Carousel.Item>
            <img
              className="d-block w-100"
              src={project.image}
              alt={project.title}
            />
            <Carousel.Caption>
              <h3>{project.title[0]}</h3>
              <div className="row links">
                  {project.link ? <button onClick={openLive}>Deployed</button> : ""}
                  {project.source ? (
                    <button onClick={openSource}>View on GitHub</button>
                  ) : (
                    ""
                  )}
                </div>
                <p>{project.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
          );
        };

        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
               {projects.map(proj => (
            <ProjectItem project={proj} />
          ))}
          </Carousel>
        );
      }
      




