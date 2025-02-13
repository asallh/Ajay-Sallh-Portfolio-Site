import Background from "@/components/Background";
import Hero from "@/app/views/Hero";
import { Box } from "@chakra-ui/react";
import Projects from "./views/Projects";

export default function Home() {
  return (
    <Box>
      <Background>
        <Hero />
        <Box className="pb-4">
          <Projects />
        </Box>
      </Background>
    </Box>
  );
}
