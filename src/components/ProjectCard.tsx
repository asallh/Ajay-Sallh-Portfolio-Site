import { Box, Center, HStack, Text } from "@chakra-ui/react";

interface CardProps {
    title: string;
    details: string;
    techStack: string[];
    link?: string;
}

export default function ProjectCard({title, details, techStack} : Readonly<CardProps>) {
  return (
    <div className="w-80 h-80 bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col justify-between">
      <div>
        <Center padding={4}>
          <Text fontSize="xl">{title}</Text>
        </Center>
        <Center>
          <Text padding={4}>{details}</Text>
        </Center>
      </div>
      {/* This div will be pushed to the bottom of the card */}
      <div className="flex justify-center mt-auto pb-4">
      <HStack wrap="wrap"justify="center"> {/* Chakra's justify prop */}
          {techStack.map((tech, index) => (
            <Box key={index} className="px-2 py-1 rounded-md text-sm">
              {tech}
            </Box>
          ))}
        </HStack>
      </div>
    </div>
  );
}
