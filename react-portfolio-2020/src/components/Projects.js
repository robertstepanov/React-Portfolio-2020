import React from "react";
import { projects } from "../db/projects";
import Project from "./Project";
import Footer from "./Footer";

import { Container } from "../styles/StyledProjects";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

library.add(fas);

export default function Projects() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <h1>My Work</h1>
      <div className="projects-list">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
      <div onClick={scrollToTop} className="top-btn">
        <icon className="fas fa-arrow-alt-circle-up to-top"></icon>
      </div>
      <Footer footerClass={" "} />
    </Container>
  );
}
