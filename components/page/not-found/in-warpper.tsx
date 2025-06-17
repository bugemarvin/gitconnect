/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiSquare } from "react-icons/fi";

export default function NotFoundInWrapper({
  notFoundText = "The page you are looking for does not exist.",
}: {
  notFoundText?: string;
}) {
  const [canGoBack, setCanGoBack] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      setCanGoBack(window?.history?.length > 1);
    } catch (_) {}
  }, []);

  return (
    <>
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Flex
          minH="100vh"
          className="w-full min-w-full px-8 py-1 pt-12"
          align="center"
          justify="center"
        >
          <div className="flex flex-col items-center justify-center px-5 text-center sm:max-w-md">
            <Flex
              w="full"
              h="200"
              maxH="full"
              justify="center"
              align="center"
              gap={6}
              className="square-bg"
            >
              <Text
                position="absolute"
                top="35%"
                left="35%"
                className="bg-white border shadow border-gray-200 rounded-md px-2 py-1 flex space-x-2 items-center text-gray-500"
              >
                <FiSquare
                  fontSize={12}
                  className="fill-gray-400 stroke-gray-400"
                />{" "}
                <span>404 Error</span>
              </Text>
              <Box alignSelf="flex-end" position="relative">
                <Text
                  className="w-full whitespace-nowrap"
                  fontSize={24}
                  fontWeight={600}
                >
                  We can&apos;t find this page
                </Text>
              </Box>
            </Flex>
            {notFoundText && (
              <Text
                className="text-gray-400 text-center dark:text-gray-500 w-full"
                fontSize={15}
              >
                {notFoundText}
              </Text>
            )}
            <Flex
              className="!flex-col md:!flex-row md:justify-center w-full"
              gap={4}
              mx="auto"
              mt={6}
            >
              {canGoBack && (
                <Button
                  colorScheme="gray"
                  variant="outline"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py={3}
                  h="fit-content"
                  w="184px"
                  size="sm"
                  fontWeight={500}
                  rounded="md"
                  leftIcon={<FiArrowLeft fontSize={14} />}
                  onClick={() => router.back()}
                >
                  Go back
                </Button>
              )}
              <Button
                colorScheme="branded"
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={3}
                h="fit-content"
                w="184px"
                size="sm"
                fontWeight={500}
                rounded="md"
                className="dark:!text-gray-100"
                rightIcon={<FiArrowRight fontSize={14} />}
                onClick={() => router.push("/")}
              >
                Go home
              </Button>
            </Flex>
          </div>
        </Flex>
      }
    </>
  );
}
