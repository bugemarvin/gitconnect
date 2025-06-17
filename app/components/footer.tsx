// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "@app/logo.png";
import Image from "next/image";
import HeaderLogo from "@/components/header-logo-name";

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("primary.500", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      className="!mt-0"
      id={"footer"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <HStack>
              <Image src={Logo} alt="Logo" width={40} height={40} />
              <HeaderLogo />
            </HStack>
            <Text fontSize={"sm"}>
              © 2024 All rights reserved, Designed by{" "}
              <a href="https://www.marvinbuge.live" target="_blank">
                Marvin
              </a>
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={""}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={""}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={""}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Git Connect</ListHeader>
            <Box as="a" href={"#"}>
              Home
            </Box>
            <Box as="a" href={"#about"}>
              About us
            </Box>
            <Box as="a" href={"#features"}>
              Features
            </Box>
            <Box as="a" href={"#contact"}>
              Contact us
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#footer"}>
              Help Center
            </Box>
            <Box as="a" href={"#footer"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#footer"}>
              Legal
            </Box>
            <Box as="a" href={"#footer"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#footer"}>
              Status
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Portal</ListHeader>
            <Box as="a" href={"#"}>
              Sign In
            </Box>
            <Box as="a" href={"#about"}>
              Sign Up
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
