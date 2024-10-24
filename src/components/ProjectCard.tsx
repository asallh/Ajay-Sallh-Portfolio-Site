import { Center, HStack, Text } from "@chakra-ui/react";

interface CardProps {
    title: string;
    details: string;
    techStack: string[];
}

export default function ProjectCard({title, details, techStack} : CardProps) {
  return (
    <div className="w-80 h-64 bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 m-16 flex flex-col justify-between">
      <div>
        <Center padding={4}>
          <Text fontSize="xl">{title}</Text>
        </Center>
        <Center>
          <Text>{details}</Text>
        </Center>
      </div>
      {/* This div will be pushed to the bottom of the card */}
      <div className="flex justify-center mt-auto pb-4">
        <Center>
          <HStack>
            {/* <Text>Icons</Text> */}
            {/* Add your icons here */}
            {techStack.map((tech, index) => (
              <Text key={index}>{tech}</Text>
            ))}
          </HStack>
        </Center>
      </div>
    </div>
  );
}
