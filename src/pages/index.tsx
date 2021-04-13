import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
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
      <Box px="56" pb="20" mt="7">
        <Swiper
          speed={1500}
          effect="fade"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
        >
          <SwiperSlide key="slide-1">
            <Link href="/continentes/europa">
              <a>
                <Flex
                  bgImage="url('/images/europa.jpeg')"
                  bgPosition="center"
                  bgSize="cover"
                  w={1240}
                  h={450}
                  justify="center"
                  align="center"
                  direction="column"
                >
                  <Text
                    color="text.dark"
                    fontSize="48"
                    fontWeight="bold"
                    bgColor="text.extralight"
                    borderTopRadius="md"
                    p="2"
                  >
                    Europa
                  </Text>
                  <Text
                    color="text.dark"
                    fontSize="24"
                    fontWeight="bold"
                    bgColor="text.extralight"
                    borderRadius="md"
                    p="2"
                  >
                    O contine mais antigo.
                  </Text>
                </Flex>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide key="slide-2">
            <Flex
              bgImage="url('/images/asia.jpeg')"
              bgPosition="center"
              bgSize="cover"
              w={1240}
              h={450}
              justify="center"
              align="center"
              direction="column"
            >
              <Text
                color="text.dark"
                fontSize="48"
                fontWeight="bold"
                bgColor="text.extralight"
                borderTopRadius="md"
                p="2"
              >
                Ásia
              </Text>
              <Text
                color="text.dark"
                fontSize="24"
                fontWeight="bold"
                bgColor="text.extralight"
                borderRadius="md"
                p="2"
              >
                O maior dos continentes.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide key="slide-3">
            <Flex
              bgImage="url('/images/north-america.jpeg')"
              bgPosition="center"
              bgSize="cover"
              w={1240}
              h={450}
              justify="center"
              align="center"
              direction="column"
            >
              <Text
                color="text.dark"
                fontSize="48"
                fontWeight="bold"
                bgColor="text.extralight"
                borderRadius="md"
                p="2"
              >
                América do Norte
              </Text>
              <Text
                color="text.dark"
                fontSize="24"
                fontWeight="bold"
                bgColor="text.extralight"
                borderBottomRadius="md"
                p="2"
              >
                O lar do sonho americano.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide key="slide-4">
            <Flex
              bgImage="url('/images/south-america.jpeg')"
              bgPosition="center"
              bgSize="cover"
              w={1240}
              h={450}
              justify="center"
              align="center"
              direction="column"
            >
              <Text
                color="text.dark"
                fontSize="48"
                fontWeight="bold"
                bgColor="text.extralight"
                borderRadius="md"
                p="2"
              >
                América do Sul
              </Text>
              <Text
                color="text.dark"
                fontSize="24"
                fontWeight="bold"
                bgColor="text.extralight"
                borderBottomRadius="md"
                p="2"
              >
                Sol, praia e mar.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide key="slide-5">
            <Flex
              bgImage="url('/images/africa.jpeg')"
              bgPosition="center"
              bgSize="cover"
              w={1240}
              h={450}
              justify="center"
              align="center"
              direction="column"
            >
              <Text
                color="text.dark"
                fontSize="48"
                fontWeight="bold"
                bgColor="text.extralight"
                borderTopRadius="md"
                p="2"
              >
                África
              </Text>
              <Text
                color="text.dark"
                fontSize="24"
                fontWeight="bold"
                bgColor="text.extralight"
                borderRadius="md"
                p="2"
              >
                Biodiversidade e multicultural.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide key="slide-6">
            <Flex
              bgImage="url('/images/oceania.jpeg')"
              bgPosition="center"
              bgSize="cover"
              w={1240}
              h={450}
              justify="center"
              align="center"
              direction="column"
            >
              <Text
                color="text.dark"
                fontSize="48"
                fontWeight="bold"
                bgColor="text.extralight"
                borderTopRadius="md"
                p="2"
              >
                Oceania
              </Text>
              <Text
                color="text.dark"
                fontSize="24"
                fontWeight="bold"
                bgColor="text.extralight"
                borderRadius="md"
                p="2"
              >
                O continente mais isolado do mundo.
              </Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
