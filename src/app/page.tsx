import Background from "@/components/Background";
import Hero from "@/components/Hero";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Background>
          <Hero/>
      </Background>
    </Box>
  );
}
