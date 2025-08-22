import Hero from "@/app/views/Hero";
import { Box, Tabs } from "@chakra-ui/react";
import Projects from "./views/Projects";
import AllProjects from "./views/AllProjects";
import Blog from "./views/Blog";

function Features() {
  return (
    <Tabs.Root defaultValue="featured">
      <Tabs.List gap="4" p="4" justifyContent="center">
        <Tabs.Trigger value="featured" px="4" py="2">Featured</Tabs.Trigger>
        <Tabs.Trigger value="projects" px="4" py="2">Projects</Tabs.Trigger>
        <Tabs.Trigger value="blog" px="4" py="2">Blog</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="featured">
        <Box className="pb-4">
          <Projects />
        </Box>
      </Tabs.Content>
      <Tabs.Content value="projects">
        <Box className="pb-4">
          <AllProjects />
        </Box>
      </Tabs.Content>
      <Tabs.Content value="blog">
        <Box className="pb-4">
          <Blog />
        </Box>
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default function Home() {
  return (
    <Box>
      <Hero />
      <Features />
    </Box>
  );
}
