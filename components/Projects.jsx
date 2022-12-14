/** @format */

import React from "react";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            src="netflix.png"
            title="Netflix"
            details="ReactJS"
            ProjectUrl="/netflix"
          />
          <ProjectItem
            src="tbc.jpg"
            title="To Be Continued"
            details="Still in Dev..."
            ProjectUrl="/tbc"
          />
          <ProjectItem
            src="tbc.jpg"
            title="To Be Continued"
            details="Still in Dev..."
            ProjectUrl="/tbc"
          />
          <ProjectItem
            src="tbc.jpg"
            title="To Be Continued"
            details="Still in Dev..."
            ProjectUrl="/tbc"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
