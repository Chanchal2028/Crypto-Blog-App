import React from "react";
import {
  Container,
  Text,
  Stack,
  Heading,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container
      maxW="1300px"
      display="flex"
      h="100vh"
      alignItems="center"
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack height="350px" justify="space-around" mt={{ base: "8", md: "0" }}>
        <Heading as="h1" fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }}>
          Get Crypto Related Knowledge
        </Heading>
        <Text as="p" maxW={{ base: "100%", md: "80%" }} fontSize={{ base: "sm", sm: "md", md: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero
          nam exercitationem cupiditate quia temporibus.Corporis vero nam
          exercitationem cupiditate quia temporibus.
        </Text>
        <Box>
          <Button colorScheme="orange">Check Posts</Button>
        </Box>
      </Stack>
      <Flex justifyContent="center" mt={{ base: "8", md: "0" }}>
        <Image w={{base:"80%",md:"auto"}} src="./images/btc.svg" />
      </Flex>
    </Container>
  );
};

export default Hero;
