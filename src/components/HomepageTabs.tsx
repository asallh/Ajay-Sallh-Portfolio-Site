"use client";

import AllProjects from "@/app/views/AllProjects";
import Projects from "@/app/views/Projects";
import { Box } from "@chakra-ui/react/box";
import { Tabs } from "@chakra-ui/react/tabs";
import { useRouter } from "next/navigation";

export default function HomepageTabs() {
  const router = useRouter();
  return (
    <Tabs.Root defaultValue="featured">
      <Tabs.List gap="4" p="4" justifyContent="center">
        <Tabs.Trigger value="featured" px="4" py="2">
          Featured
        </Tabs.Trigger>
        <Tabs.Trigger value="projects" px="4" py="2">
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger
          value="blog"
          px="4"
          py="2"
          onClick={() => router.push("/blog")}
        >
          Blog
        </Tabs.Trigger>
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
        <Box className="pb-4"></Box>
      </Tabs.Content>
    </Tabs.Root>
  );
}
