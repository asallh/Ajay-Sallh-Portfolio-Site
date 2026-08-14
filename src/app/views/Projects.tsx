import ProjectCard from "@/components/ProjectCard";
import { Box } from "@chakra-ui/react";
import { projects } from "../data/projectData";

export default function Projects() {
  return (
    <Box className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
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
