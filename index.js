const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hello from this side",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 4000 }).then((res) => {
  console.log(`Server running at ${res.url}`);
});
