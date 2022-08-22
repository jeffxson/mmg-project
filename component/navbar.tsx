import {
  Box,
  useColorModeValue,
  useColorMode,
  Button,
  Heading,
  Spacer,
  MenuButton,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import { useState } from "react";
import React from "react";

const NavBar: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Box
        p={3}
        pl={6}
        pr={6}
        pt={4}
        mb={10}
        borderColor="transparent"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        color={useColorModeValue(
          "lightMode.mainTextColor",
          "darkMode.mainTextColor"
        )}
      >
        <Flex>
          <Heading size="md">Where in the world?</Heading>
          <Spacer />

          <Button
            borderColor="transparent"
            color={useColorModeValue(
              "lightMode.mainTextColor",
              "darkMode.mainTextColor"
            )}
            onClick={toggleColorMode}
          >
            <MoonIcon /> &nbsp; Dark Mode
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavBar;
