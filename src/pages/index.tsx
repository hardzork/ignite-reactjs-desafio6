import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetStaticProps } from "next";
import { api } from "../services/api";

SwiperCore.use([Navigation, Pagination, Autoplay]);

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
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });
  return (
    <Flex direction="column" w="100vw">
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Flex
        w="100%"
        maxWidth={1440}
        mx="auto"
        justify="center"
        align="center"
        h={["50px", "100px"]}
      >
        <Image
          src="/images/logo.svg"
          alt="World Trip"
          w={["81px", "185px"]}
          h={["20px", "46px"]}
        />
      </Flex>

      <Box
        bgImage="url('/images/background.png')"
        bgSize="cover"
        w="100%"
        h={["163px", "335px"]}
      >
        <Flex>
          <Flex direction="column" ml={[4, 56]} mt={[19.5, 20]}>
            <Text color="text.light" fontSize={[20, 36]} textAlign="left">
              5 Continentes,
              <br /> infinitas possibilidades.
            </Text>
            <Text
              color="gray.300"
              fontSize={[14, 20]}
              mt={[2, 5]}
              w={["100%", "524px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          {isWideScreen && (
            <Flex flex="1" justify="center" align="center">
              <Image src="/images/airplane.svg" alt="airplane" mt="20"></Image>
            </Flex>
          )}
        </Flex>
      </Box>

      <Flex justify="center" align="center">
        <Flex
          px={[8, 0]}
          py={[8, 8]}
          maxW={1160}
          justify="space-between"
          align="center"
          flex="1"
          direction="row"
          wrap="wrap"
        >
          <Flex
            justify="center"
            align="center"
            direction={["row", "column"]}
            p={[2, 0]}
            flexGrow={[1, 1]}
            flex={["-1", "1"]}
          >
            {isWideScreen ? (
              <Image src="/images/cocktail.svg" />
            ) : (
              <Box
                bgColor="text.highlight"
                w={2}
                h={2}
                borderRadius={25}
                mr={2}
              ></Box>
            )}
            <Text>vida noturna</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            direction={["row", "column"]}
            p={[2, 0]}
            flexGrow={[2, 1]}
            flex={["-1", "1"]}
          >
            {isWideScreen ? (
              <Image src="/images/surf.svg" />
            ) : (
              <Box
                bgColor="text.highlight"
                w={2}
                h={2}
                borderRadius={25}
                mr={2}
              ></Box>
            )}
            <Text>praia</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            direction={["row", "column"]}
            p={[4, 0]}
            flexGrow={[3, 1]}
            flex={["-1", "1"]}
          >
            {isWideScreen ? (
              <Image src="/images/building.svg" />
            ) : (
              <Box
                bgColor="text.highlight"
                w={2}
                h={2}
                borderRadius={25}
                mr={2}
              ></Box>
            )}
            <Text>moderno</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            direction={["row", "column"]}
            p={[4, 0]}
            flexGrow={[4, 1]}
            flex={["-1", "1"]}
          >
            {isWideScreen ? (
              <Image src="/images/museum.svg" />
            ) : (
              <Box
                bgColor="text.highlight"
                w={2}
                h={2}
                borderRadius={25}
                mr={2}
              ></Box>
            )}
            <Text>clássico</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            direction={["row", "column"]}
            p={[1, 0]}
            flexGrow={[5, 1]}
            flex={["-1", "1"]}
          >
            {isWideScreen ? (
              <Image src="/images/earth.svg" />
            ) : (
              <Box
                bgColor="text.highlight"
                w={2}
                h={2}
                borderRadius={25}
                mr={2}
              ></Box>
            )}
            <Text>e mais...</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex flex="1" justify="center" align="center" mx="auto" max-width={1440}>
        <Divider bgColor="text.dark" w={["60px", "90px"]} h="0.6" />
      </Flex>

      <Flex display="flex" justify="center" align="center" my={[4, 12]}>
        <Text fontSize={[20, 36]} color="text.dark" textAlign="center">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>

      <Box px={[0, 56]} pb={[10, 20]} mt={[0, 7]}>
        <Swiper
          speed={1500}
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
                    w={[375, 1240]}
                    h={[250, 450]}
                    justify="center"
                    align="center"
                    direction="column"
                  >
                    <Text
                      color="text.dark"
                      fontSize={[24, 48]}
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
                      fontSize={[14, 24]}
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
    </Flex>
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
