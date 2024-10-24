import { Center, HStack, Text } from "@chakra-ui/react";

export default function ProjectCard() {
  return (
    <div className="w-80 h-64 bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 m-16 flex flex-col justify-between">
      <div>
        <Center padding={4}>
          <Text fontSize="xl">Project Name</Text>
        </Center>
        <Center>
          <Text>Details</Text>
        </Center>
      </div>
      {/* This div will be pushed to the bottom of the card */}
      <div className="flex justify-center mt-auto pb-4">
        <Center>
          <HStack>
            <Text>Icons</Text>
            {/* Add your icons here */}
          </HStack>
        </Center>
      </div>
    </div>
  );
}
