import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Flex, Icon, Image, Box, Text, HStack } from "@chakra-ui/react";
import { FiChevronLeft, FiInfo } from "react-icons/fi";
import { api } from "../../services/api";

interface ContinenteProps {
  continente: Continente;
}

interface Continente {
  name: string;
  slug: string;
  image: {
    src: string;
    alt: string;
  };
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
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="40">
        <Flex justify="center" align="center">
          <Text
            as="p"
            display="flex"
            flex="1"
            color="text.dark"
            fontSize="18"
            textAlign="justify"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex py="20" flex="1" justify="space-around" align="center" ml="70">
            <Flex justify="center" align="center" direction="column">
              <Text
                color="text.highlight"
                fontWeight="bold"
                fontSize="48"
                lineHeight="4,5"
              >
                50
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
                60
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
                27
              </Text>
              <HStack>
                <Text color="text.dark" fontWeight="bold" fontSize="24">
                  cidades +100
                </Text>
                <Icon as={FiInfo} fontSize="16" color="gray.400" />
              </HStack>
            </Flex>
          </Flex>
        </Flex>
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
  console.log(params);
  const { slug } = params;
  const response = await api.get<Continente[]>("");
  const continente = response.data.filter((c) => c.slug === slug);
  // console.log(continente);
  const UM_DIA = 60 * 60 * 24;
  return { props: { continente }, revalidate: UM_DIA };
};
