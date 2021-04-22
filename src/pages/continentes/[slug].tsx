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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  useBreakpointValue,
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
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <Flex direction="column" w="100vw">
      <Head>
        <title> {continente.name} | worldtrip </title>
      </Head>

      <Flex
        w="100%"
        maxWidth={1440}
        mx="auto"
        justify="center"
        align="center"
        h={["50px", "100px"]}
      >
        <Link href="/">
          <a>
            <Icon as={FiChevronLeft} fontSize={[20, 34]} />
          </a>
        </Link>
        <Flex justify="center" align="center" flex="1">
          <Image
            src="/images/logo.svg"
            alt="World Trip"
            w={["82px", "185px"]}
            h={["20px", "46px"]}
          ></Image>
        </Flex>
      </Flex>

      <Flex
        bgImage={`url('${continente.image?.src}')`}
        bgPosition="center"
        bgSize="cover"
        w="100%"
        h={["163px", "500px"]}
        align="flex-end"
      >
        <Text
          color="text.dark"
          fontSize={[28, 48]}
          fontWeight="500"
          bgColor="text.extralight"
          pl={[4, 60]}
          flex="1"
        >
          {continente.name}
        </Text>
      </Flex>

      <Flex w="100%" maxWidth={1440} mx="auto" px={[0, 40]} direction="column">
        <Flex
          justify="center"
          align="center"
          my={[4, 10]}
          direction={["column", "row"]}
        >
          <Text
            as="p"
            display="flex"
            flex="1"
            color="text.dark"
            fontSize={[14, 18]}
            textAlign="justify"
            px={[4, 0]}
          >
            {continente.details}
          </Text>

          <Flex
            py={[5, 20]}
            flex="1"
            w={["100%", "auto"]}
            justify={["space-between", "space-around"]}
            align="center"
            ml={[0, 70]}
            px={[4, 0]}
          >
            <Flex
              justify="center"
              align={["flex-start", "center"]}
              direction="column"
            >
              <Text
                color="text.highlight"
                fontWeight="500"
                fontSize={[24, 48]}
                lineHeight={[1.2, 1.5]}
              >
                {continente.countriesAmount}
              </Text>
              <Text color="text.dark" fontWeight="400" fontSize={[18, 24]}>
                países
              </Text>
            </Flex>
            <Flex
              justify="center"
              align={["flex-start", "center"]}
              direction="column"
            >
              <Text
                color="text.highlight"
                fontWeight="500"
                fontSize={[24, 48]}
                lineHeight={[1.2, 1.5]}
              >
                {continente.languageSpokenAmount}
              </Text>
              <Text color="text.dark" fontWeight="400" fontSize={[18, 24]}>
                línguas
              </Text>
            </Flex>
            <Flex
              justify="center"
              align={["flex-start", "center"]}
              direction="column"
            >
              <Text
                color="text.highlight"
                fontWeight="500"
                fontSize={[24, 48]}
                lineHeight={[1.2, 1.5]}
              >
                {continente.hundredPlusCities?.length}
              </Text>
              <HStack>
                <Text color="text.dark" fontWeight="400" fontSize={[18, 24]}>
                  cidades +100
                </Text>
                {isWideScreen ? (
                  <Tooltip
                    hasArrow
                    label="São as cidades do continente entre as 100 mais visitadas
                        do mundo."
                    aria-label="Cidades +100"
                  >
                    <span>
                      <Icon as={FiInfo} fontSize={[10, 16]} color="gray.400" />
                    </span>
                  </Tooltip>
                ) : (
                  <Popover>
                    <PopoverTrigger>
                      <a>
                        <Icon
                          as={FiInfo}
                          fontSize={[10, 16]}
                          color="gray.400"
                        />
                      </a>
                    </PopoverTrigger>
                    <PopoverContent
                      color="white"
                      bg="blue.800"
                      borderColor="blue.800"
                    >
                      <PopoverArrow bg="blue.800" />
                      <PopoverCloseButton />
                      <PopoverBody fontSize={12} w={300}>
                        São as cidades do continente entre as 100 mais visitadas
                        do mundo.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                )}
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Heading
        color="text.dark"
        fontWeight="normal"
        fontSize={[24, 36]}
        lineHeight="3"
        mb={[6, 12]}
        pl={[4, 60]}
      >
        Cidades +100
      </Heading>

      <SimpleGrid
        spacing={[5, 12]}
        columns={[1, 4]}
        px={[0, 60]}
        mx={["auto", 0]}
        mb={7}
      >
        {continente.hundredPlusCities?.map((city) => (
          <Box
            bg="white"
            borderColor="text.highlighten"
            borderWidth="thin"
            borderRadius={4}
            key={city.id}
            w={256}
            h={279}
          >
            <Image src={city.image} width="100%" h={173} objectFit="cover" />
            <Flex flex="1" justify="space-between" align="center" px={6} mt={4}>
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
                  color="text.lightdark"
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
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<Continente[]>("continents");
  const continentes = response.data;
  const paths = continentes.map((continente) => ({
    params: { slug: continente.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const response = await api.get<Continente>(`continents?slug=${slug}`);
  const continente = response.data[0];
  const UM_DIA_EM_SEGUNDOS = 60 * 60 * 24;
  return {
    props: { continente },
    revalidate: UM_DIA_EM_SEGUNDOS,
  };
};
