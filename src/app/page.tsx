import Hero from "@/app/views/Hero";
import { Box } from "@chakra-ui/react";
import HomepageTabs from "@/components/HomepageTabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box>
      <Hero />
      <HomepageTabs />
      <Footer />
    </Box>
  );
}
