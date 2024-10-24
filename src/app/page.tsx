import Background from "@/components/Background";
import Hero from "@/app/views/Hero";
import { Box } from "@chakra-ui/react";
import Projects from "./views/Projects";

export default function Home() {
  return (
    <Box>
      <Background>
          <Hero/>
          <Projects />
      </Background>
    </Box>
  );
}
