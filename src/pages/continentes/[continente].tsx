import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

interface ContinenteProps {
  continente: string;
}

export default function Continente({ continente }: ContinenteProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title> {continente} | worldtrip </title>
      </Head>
      <strong>{continente}</strong>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { continente: "europa" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continente } = params;
  return { props: { continente } };
};
