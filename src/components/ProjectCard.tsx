import { Box, Center, HStack, Text } from "@chakra-ui/react";

interface CardProps {
  title: string;
  details: string;
  techStack: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  details,
  techStack,
}: Readonly<CardProps>) {
  return (
    <div
      className="
                    w-80 
                    h-80 
                    bg-gray-0 
                    rounded-2xl 
                    bg-clip-padding 
                    backdrop-filter 
                    backdrop-blur-sm 
                    bg-opacity-10 
                    border 
                    border-gray-100 
                    flex 
                    flex-col 
                    justify-between
                    hover:shadow-[0_0_20px_rgba(121,245,246,0.5)]
                    transition-shadow
                    duration-300"
    >
      <div>
        <Center padding={4}>
          <Text fontSize="xl">{title}</Text>
        </Center>
        <Center>
          <Text padding={4}>{details}</Text>
        </Center>
      </div>
      <div className="flex justify-center mt-auto pb-4">
        <HStack wrap="wrap" justify="center">
          {techStack.map((tech, index) => (
            <Box
              key={index}
              className="px-2 py-1 rounded-md text-sm bg-gray-800 bg-opacity-50"
            >
              {tech}
            </Box>
          ))}
        </HStack>
      </div>
    </div>
  );
}
