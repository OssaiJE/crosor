const path = require("path");
const { ApolloServer, gql } = require("apollo-server");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: "./config/config.env" });

// Connecting to DB
connectDB();

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

const PORT = process.env.PORT || 4001;

server.listen(PORT, console.log(`Server running on port ${PORT}`));

// ({ port: 4000 }).then((res) => {
//   console.log(`Server running at ${res.url}`);
// });
