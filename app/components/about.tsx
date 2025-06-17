// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import { Box, Container, Heading, Text, Stack, Image, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    ref: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descriptions: "Description 1",
  },
  {
    ref: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descriptions: "Description 2",
  },
  {
    ref: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descriptions: "Description 3",
  },
  {
    ref: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descriptions: "Description 4",
  },
  {
    ref: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descriptions: "Description 5",
  },
  {
    ref: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descriptions: "Description 6",
  },
];

export default function AboutSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Box p={6} id="about">
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
      >
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          gap={8}
        >
          <Heading fontSize={"3xl"} color={"headerText"} mt={8}>
            What is GitConnect?
          </Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Git Connect is a platform designed for developers to connect, share
            their projects, and engage in meaningful discussions. Whether you
            &apos;re a seasoned programmer or just getting started, GitConnect
            helps you grow your network, find collaborators, and showcase your
            work.
          </Text>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Slider {...settings}>
              {images.map((image, index) => (
                <Box key={index} position={"relative"}>
                  <Image
                    src={image.ref}
                    alt={`Image ${index}`}
                    w={"100%"}
                    h={"40%"}
                  />
                  {/* <Text
                  color={"primary.700"}
                  fontSize={"sm"}
                  position={"absolute"}
                  bottom={2}
                  left={0}
                  right={0}
                  >
                  {image.descriptions}
                  </Text> */}
                </Box>
              ))}
            </Slider>
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
}
