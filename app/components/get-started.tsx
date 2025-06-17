// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import {
  Box,
  VStack,
  Button,
  Flex,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";

export default function GetStarted() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        y={8}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Get Started
            </chakra.h2>
            <Button
              colorScheme="primary"
              size="md"
              _hover={{ bg: "primary.400" }}
            >
              Create an account
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              <i>
                With <strong>Git Connect</strong>, you can build your network,
                find collaborators, and showcase your work. Share your projects,
                engage in meaningful discussions, and grow your network.
              </i>
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
