import Hero from "@/app/views/Hero";
import { Box } from "@chakra-ui/react";
import Projects from "./views/Projects";

export default function Home() {
  return (
    <Box>
        <Hero />
        <Box className="pb-4">
          <Projects />
        </Box>
    </Box>
  );
}
