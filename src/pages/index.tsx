import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

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
      <Flex display="flex" justify="center" align="center" my="12">
        <Text fontSize="36" color="text.dark" textAlign="center">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>
      <Box px="56" my="20">
        <Swiper pagination={{ clickable: true }}>
          <SwiperSlide key="slide-1">
            <Image src="/images/europa.jpeg" w={1240} h={330} fit="cover" />
          </SwiperSlide>
          <SwiperSlide key="slide-2">
            <Image src="/images/asia.jpeg" w={1240} h={330} fit="cover" />
          </SwiperSlide>
          <SwiperSlide key="slide-3">
            <Image
              src="/images/north-america.jpeg"
              w={1240}
              h={330}
              fit="cover"
            />
          </SwiperSlide>
          <SwiperSlide key="slide-4">
            <Image
              src="/images/south-america.jpeg"
              w={1240}
              h={330}
              fit="cover"
            />
          </SwiperSlide>
          <SwiperSlide key="slide-5">
            <Image src="/images/africa.jpeg" w={1240} h={330} fit="cover" />
          </SwiperSlide>
          <SwiperSlide key="slide-6">
            <Image src="/images/oceania.jpeg" w={1240} h={330} fit="cover" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
