import { Box } from "@chakra-ui/react/box";
import React from "react";
import { projects } from "../data/projectData";
import ProjectCard from "@/components/ProjectCard";

export default function AllProjects() {
  return (
    <Box className="flex flex-wrap gap-4 justify-evenly items-start">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          details={project.details}
          techStack={project.techStack}
        />
      ))}
    </Box>
  );
}
