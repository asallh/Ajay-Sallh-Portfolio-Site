import Hero from "@/app/views/Hero";
import { Box } from "@chakra-ui/react";
import HomepageTabs from "@/components/HomepageTabs";

export default function Home() {
  return (
    <Box>
      <Hero />
      <HomepageTabs />
    </Box>
  );
}
