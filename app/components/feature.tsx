// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const features = [
  {
    title: "Developer Profiles",
    text: "Every user gets a detailed profile where they can display their personal information, education, work experience, and GitHub repositories.",
  },
  {
    title: "Engage with the Community",
    text: "View posts from other developers, like or dislike their content, and start discussions in the comments.",
  },
  {
    title: "Show Your Projects",
    text: "Automatically display your GitHub repositories and let others see what you’re working on.",
  },
  {
    title: "Public Access",
    text: "Non-members can browse the list of developers and view profiles, helping you get visibility even from outside the platform."
  }
];

export default function FeatureSection() {
  return (
    <Box p={8} mb={4} id="features">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Why GitConnect?</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Build your network, find collaborators, and showcase your work with
          GitConnect. Here are some of the features that make GitConnect the
          perfect platform for developers. Share your projects, engage in
          meaningful discussions, and grow your network.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, index) => (
            <HStack key={index} align={"top"}>
              <Box color={"primary.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
