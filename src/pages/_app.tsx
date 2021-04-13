import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import "swiper/swiper-bundle.css";
// import { createServer, Model } from "miragejs";
// // import { makeServer } from "../services/mirage";

// // if (process.env.NODE_ENV === "development") {
// //   makeServer({ environment: "development" });
// // }

// createServer({
//   models: {
//     transaction: Model,
//   },
//   seeds(server) {
//     server.db.loadData({
//       transactions: [
//         {
//           id: 1,
//           title: "App de roupa",
//           amount: 15500,
//           type: "deposit",
//           category: "Desenvolvimento",
//           createdAt: new Date("2021-02-12 09:00:00"),
//         },
//         {
//           id: 2,
//           title: "Aluguel APTO",
//           amount: 1500,
//           type: "withdraw",
//           category: "Casa",
//           createdAt: new Date("2021-02-01 12:00:00"),
//         },
//       ],
//     });
//   },
//   routes() {
//     this.namespace = "api";
//     this.get("/transactions", () => {
//       return this.schema.all("transaction");
//     });
//     this.post("/transactions", (schema, request) => {
//       const data = JSON.parse(request.requestBody);
//       return schema.create("transaction", data);
//     });
//   },
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
