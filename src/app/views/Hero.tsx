import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import profilepic from "../assets/memeoji.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <Center>
      <Box className="pt-32">
        <Flex align="center">
          <Image
            src={profilepic}
            alt={"That me!"}
            width={150}
            height={150}
            style={{ borderRadius: "50%", border: "3px solid white" }}
          />

          <Box ml={16}>
            <Text fontSize="6xl" fontWeight="bold">
              Aj Sallh
            </Text>
            <Center>
              <HStack mt={2}>
                <a
                  href="https://github.com/asallh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={28} className="m-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajaypalsallh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={28} className="m-4" />
                </a>
                <a href="mailto:ajaypalsallh@gmail.com">
                  <MdEmail size={28} className="m-4" />
                </a>
              </HStack>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
