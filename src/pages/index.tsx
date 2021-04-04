import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <>
      <Flex justify="center" align="center" py="7">
        <Image src="/images/logo.svg" alt="World Trip"></Image>
      </Flex>
      <Box
        bgImage="url('/images/background.png')"
        bgSize="cover"
        w="100vw"
        h="335px"
      >
        <Flex>
          <Box>
            <Text
              ml="56"
              mt="20"
              color="text.light"
              fontSize="36"
              textAlign="left"
            >
              5 Continentes,
              <br /> infinitas possibilidades.
            </Text>
            <Text ml="56" mt="4" color="gray.300" fontSize="20" w="524px">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Flex flex="1" justify="center" align="center">
            <Image src="/images/airplane.svg" alt="airplane" mt="20"></Image>
          </Flex>
        </Flex>
      </Box>
      <Flex px="56" py="20" flex="1" justify="space-between" align="center">
        <Flex justify="center" align="center" direction="column">
          <Image src="/images/cocktail.svg" />
          <Text>vida noturna</Text>
        </Flex>
        <Flex justify="center" align="center" direction="column">
          <Image src="/images/surf.svg" />
          <Text>praia</Text>
        </Flex>
        <Flex justify="center" align="center" direction="column">
          <Image src="/images/building.svg" />
          <Text>moderno</Text>
        </Flex>
        <Flex justify="center" align="center" direction="column">
          <Image src="/images/museum.svg" />
          <Text>clássico</Text>
        </Flex>
        <Flex justify="center" align="center" direction="column">
          <Image src="/images/earth.svg" />
          <Text>e mais...</Text>
        </Flex>
      </Flex>
      <Flex flex="1" justify="center" align="center">
        <Divider bgColor="text.dark" w="24" h="0.6" />
      </Flex>
      <Flex justify="center" align="center" py="9" mt="9">
        <Text fontSize="36" color="text.dark" textAlign="center">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>
    </>
  );
}
