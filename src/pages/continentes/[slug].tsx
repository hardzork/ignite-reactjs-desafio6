import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import {
  Flex,
  Icon,
  Image,
  Box,
  Text,
  HStack,
  Heading,
  SimpleGrid,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import { FiChevronLeft, FiInfo } from "react-icons/fi";
import { api } from "../../services/api";
import React from "react";

interface ContinenteProps {
  continente: Continente;
}

interface City {
  id: number;
  name: string;
  country: string;
  image: string;
  countryIcon: string;
}

interface Continente {
  name: string;
  slug: string;
  details: string;
  countriesAmount: number;
  languageSpokenAmount: number;
  image: {
    src: string;
    alt: string;
  };
  hundredPlusCities: City[];
}

export default function Continente({ continente }: ContinenteProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title> {continente.name} | worldtrip </title>
      </Head>
      {/* header */}
      <Flex py="7" justify="center" align="center">
        <Flex pl="56" zIndex="skipLink">
          <Link href="/">
            <a>
              <Icon as={FiChevronLeft} fontSize="34" />
            </a>
          </Link>
        </Flex>
        <Flex justify="center" align="center" flex="1" ml="-64">
          <Image src="/images/logo.svg" alt="World Trip"></Image>
        </Flex>
      </Flex>
      {/* fim header */}

      <Flex
        bgImage={`url('${continente.image?.src}')`}
        bgPosition="center"
        bgSize="cover"
        w="100vw"
        h="500px"
        align="flex-end"
      >
        <Text
          color="text.dark"
          fontSize="48"
          fontWeight="bold"
          bgColor="text.extralight"
          pl="60"
          flex="1"
        >
          {continente.name}
        </Text>
      </Flex>
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="40"
        direction="column"
      >
        <Flex justify="center" align="center" my="10">
          <Text
            as="p"
            display="flex"
            flex="1"
            color="text.dark"
            fontSize="18"
            textAlign="justify"
          >
            {continente.details}
          </Text>
          <Flex py="20" flex="1" justify="space-around" align="center" ml="70">
            <Flex justify="center" align="center" direction="column">
              <Text
                color="text.highlight"
                fontWeight="bold"
                fontSize="48"
                lineHeight="4,5"
              >
                {continente.countriesAmount}
              </Text>
              <Text color="text.dark" fontWeight="bold" fontSize="24">
                países
              </Text>
            </Flex>
            <Flex justify="center" align="center" direction="column">
              <Text
                color="text.highlight"
                fontWeight="bold"
                fontSize="48"
                lineHeight="4,5"
              >
                {continente.languageSpokenAmount}
              </Text>
              <Text color="text.dark" fontWeight="bold" fontSize="24">
                línguas
              </Text>
            </Flex>
            <Flex justify="center" align="center" direction="column">
              <Text
                color="text.highlight"
                fontWeight="bold"
                fontSize="48"
                lineHeight="4,5"
              >
                {continente.hundredPlusCities?.length}
              </Text>
              <HStack>
                <Text color="text.dark" fontWeight="bold" fontSize="24">
                  cidades +100
                </Text>
                <Tooltip
                  hasArrow
                  label="São as cidades do continente entre as 100 mais visitadas
                        do mundo."
                  aria-label="Cidades +100"
                >
                  <span>
                    <Icon as={FiInfo} fontSize="16" color="gray.400" />
                  </span>
                </Tooltip>
              </HStack>
            </Flex>
          </Flex>
        </Flex>

        <Heading
          color="text.dark"
          fontWeight="normal"
          fontSize="36"
          lineHeight="3"
          mb="12"
        >
          Cidades +100
        </Heading>
        <SimpleGrid flex="1" spacing={10} maxChildWidth="256px" columns={4}>
          {continente.hundredPlusCities?.map((city) => (
            <Box
              bg="white"
              borderColor="text.highlighten"
              borderWidth="thin"
              borderRadius={4}
            >
              <Image src={city.image} width="100%" h={173} objectFit="cover" />
              <Flex flex="1" justify="space-between" align="center" p="4">
                <Flex direction="column">
                  <Text
                    fontFamily="Barlow"
                    fontWeight="600"
                    fontSize="20"
                    lineHeight="2"
                    color="text.dark"
                  >
                    {city.name}
                  </Text>
                  <Text
                    fontFamily="Barlow"
                    fontWeight="500"
                    fontSize="16"
                    lineHeight="2"
                    color="text.dark"
                  >
                    {city.country}
                  </Text>
                </Flex>
                <Avatar size="sm" name={city.country} src={city.countryIcon} />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { slug: "europa" },
      },
      {
        params: { slug: "asia" },
      },
      {
        params: { slug: "north-america" },
      },
      {
        params: { slug: "south-america" },
      },
      {
        params: { slug: "africa" },
      },
      {
        params: { slug: "oceania" },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // console.log(params);
  const { slug } = params;

  const response = await api.get<Continente>(`continents?slug=${slug}`);
  const continente = response.data[0];
  const UM_DIA_EM_SEGUNDOS = 60 * 60 * 24;
  return {
    props: { continente },
    revalidate: UM_DIA_EM_SEGUNDOS,
  };
};
