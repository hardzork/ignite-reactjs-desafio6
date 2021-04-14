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
import { GetStaticProps } from "next";
import { api } from "../services/api";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

interface HomeProps {
  continentes: Continente[];
}

interface Continente {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function Home({ continentes }: HomeProps) {
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
          {continentes.map((continente) => (
            <SwiperSlide key={`slide-${continente.id}`}>
              <Link href={`/continentes/${continente.slug}`}>
                <a>
                  <Flex
                    bgImage={`url('${continente.image?.src}')`}
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
                      outlineColor="whi"
                      bgColor="text.highlight"
                      borderTopRadius="md"
                      p="2"
                    >
                      {continente.name}
                    </Text>
                    <Text
                      color="text.dark"
                      fontSize="24"
                      fontWeight="bold"
                      bgColor="text.highlight"
                      borderRadius="md"
                      p="2"
                    >
                      {continente.description}
                    </Text>
                  </Flex>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Continente[]>("continents");
  const continentes = response.data;
  const TRINTA_DIAS_EM_SEGUNDOS = 60 * 60 * 24 * 30;
  return {
    props: { continentes },
    revalidate: TRINTA_DIAS_EM_SEGUNDOS,
  };
};
