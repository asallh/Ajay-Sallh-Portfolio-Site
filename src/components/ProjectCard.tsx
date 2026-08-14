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
        w-full
        h-full
        min-h-72
        bg-gray-0
        rounded-2xl
        bg-clip-padding
        backdrop-filter
        backdrop-blur-sm
        bg-opacity-10
        border
        border-[#ffffff22]
        flex
        flex-col
        justify-between
        hover:border-blue-400
        transition-shadow
        duration-300
      "
    >
      <div>
        <Center padding={4}>
          <Text fontSize="xl" fontWeight="semibold" textAlign="center">
            {title}
          </Text>
        </Center>
        <Center>
          <Text padding={4} textAlign="center" className="line-clamp-5">
            {details}
          </Text>
        </Center>
      </div>
      <div className="flex justify-center mt-auto px-3 pb-4">
        <HStack wrap="wrap" justify="center" gap={2}>
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
