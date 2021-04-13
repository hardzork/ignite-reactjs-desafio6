import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    models: {
      movie: Model,
    },
    seeds(server) {
      // server.create("continent", {
      //   id: 1,
      //   slug: "europa",
      //   name: "Europa",
      //   description: "O contine mais antigo.",
      //   image: {
      //     src: "/images/europa.jpeg",
      //     alt: "Paris, França",
      //   },
      // });
      // server.db.loadData({
      //   continents: [
      //     {
      //       id: 1,
      //       slug: "europa",
      //       name: "Europa",
      //       description: "O contine mais antigo.",
      //       image: {
      //         src: "/images/europa.jpeg",
      //         alt: "Paris, França",
      //       },
      //     },
      //     {
      //       id: 2,
      //       slug: "asia",
      //       name: "Ásia",
      //       description: "O maior dos continentes.",
      //       image: {
      //         src: "/images/asia.jpeg",
      //         alt: "Hong Kong, China",
      //       },
      //     },
      //     {
      //       id: 3,
      //       slug: "north-america",
      //       name: "América do Norte",
      //       description: "O lar do sonho americano.",
      //       image: {
      //         src: "/images/north-america.jpeg",
      //         alt: "Nova Iorque, EUA",
      //       },
      //     },
      //     {
      //       id: 4,
      //       slug: "south-america",
      //       name: "América do Sul",
      //       description: "Sol, praia e mar.",
      //       image: {
      //         src: "/images/south-america.jpeg",
      //         alt: "Rio de Janeiro, Brasil",
      //       },
      //     },
      //     {
      //       id: 5,
      //       slug: "africa",
      //       name: "África",
      //       description: "Biodiversidade e multicultural.",
      //       image: {
      //         src: "/images/africa.jpeg",
      //         alt: "Desconhecido",
      //       },
      //     },
      //     {
      //       id: 6,
      //       slug: "oceania",
      //       name: "Oceania",
      //       description: "O continente mais isolado do mundo.",
      //       image: {
      //         src: "/images/oceania.jpeg",
      //         alt: "Sidney, Austrália",
      //       },
      //     },
      //   ],
      // });
      server.create("movie", { name: "Inception", year: 2010 });
      server.create("movie", { name: "Interstellar", year: 2014 });
      server.create("movie", { name: "Dunkirk", year: 2017 });
    },

    routes() {
      this.namespace = "data";
      this.get("/movies", (schema) => {
        return schema.movies.all();
      });
    },
  });

  return server;
}
