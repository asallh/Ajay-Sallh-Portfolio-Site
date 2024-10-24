import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import profilepic from "../assets/memeoji.png"
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
                <FaGithub size={28} className="m-4"/>
                <FaLinkedin size={28} className="m-4"/>
                <MdEmail size={28} className="m-4"/>
              </HStack>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
