import { ApolloServer, gql } from "apollo-server";

// not required but can be useful if you run multiple servers.
const PORT = 2999;

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Start accepting connections.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Apollo server running on port ${url}`);
});
