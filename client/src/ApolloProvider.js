import React from "react";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


const ApolloP = () => {

    const client = new ApolloClient({
      uri: "http://localhost:4000",
      cache: new InMemoryCache(),
    });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default ApolloP;
