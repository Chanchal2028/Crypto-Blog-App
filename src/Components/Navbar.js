import React from "react";
import { Image } from "@chakra-ui/react";
import { Container, Flex, Text } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Container
      as="nav"
      maxW="1300px"
      display="flex"
      justifyContent="space-between"
      padding="4"
      boxShadow="lg"
      borderRadius="lg"
      pos="sticky"
      top="0"
      zIndex="50"
      bg="white"
    >
      <Flex align="center">
        <Image src="./images/btc.svg" w="50px" h="50px" mr="4px" />
        <Text>Home</Text>
      </Flex>
      <Flex align="center">
        <Text mr="2">Posts</Text>
        <Text mr="2">Trending</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            w={{ base: "100px", sm: "160px", md: "auto" }}
            type="tel"
            placeholder="Phone Number"
          />
        </InputGroup>
      </Flex>
    </Container>
  );
};

export default Navbar;
