// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} id="hero">
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "headerText.400",
                  zIndex: -1,
                }}
                color={"headerText"}
              >
                Find{" "}
              </Text>
              <br />{" "}
              <Text color={"primary.400"} as={"span"}>
                <Text as="span" className={"!text-headerText-500"}>
                  &
                </Text>{" "}
                connect{" "}
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Join a community of developers to showcase your work, collaborate
              on projects, and stay connected.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                as={"a"}
                rounded={"full"}
                bg={"primary.400"}
                color={"white"}
                _hover={{
                  bg: "primary.500",
                }}
                href="#about"
                className="text-decoration-none no-underline"
              >
                About Us
              </Button>
              <Button
                rounded={"full"}
                bg={"headerText.400"}
                color={"white"}
                _hover={{
                  bg: "headerText.500",
                }}
              >
                How It Works
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Flex>
      </Stack>
    </>
  );
}
