import ProjectCard from "@/components/ProjectCard";
import { Box } from "@chakra-ui/react";
import { projects } from "../data/projectData";

export default function Projects() {
  return (
    <Box className="flex flex-wrap gap-4 justify-evenly items-start">
      {projects
        .filter((project) => project.featured == true)
        .map((project, index) => (
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
