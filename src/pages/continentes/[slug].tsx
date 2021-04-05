import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

interface ContinenteProps {
  slug: string;
}

export default function Continente({ slug }: ContinenteProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title> {slug} | worldtrip </title>
      </Head>
      <strong>{slug}</strong>
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
  const { slug } = params;
  return { props: { slug } };
};
