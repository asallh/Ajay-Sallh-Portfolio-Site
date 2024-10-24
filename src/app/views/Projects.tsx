import ProjectCard from "@/components/ProjectCard";
import { Box } from "@chakra-ui/react";
import { projects } from "../data/projectData";

export default function Projects() {
  return (
    <Box>
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
