const path = require("path");
const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index.resolvers");
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: "./config/config.env" });

// Connecting to DB
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({req})
});

const PORT = process.env.PORT || 4001;

server.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
