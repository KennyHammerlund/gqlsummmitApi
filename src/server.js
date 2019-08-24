import { importSchema } from "graphql-import";
import { ApolloServer, gql } from "apollo-server";
import _ from "lodash";

import * as resolvers from "./graphs/resolvers";

const typeDefs = importSchema("./src/graphs/schema.graphql");

// not required but can be useful if you run multiple servers.
const PORT = 2999;

const server = new ApolloServer({
  typeDefs,
  resolvers: _.reduce(resolvers, (prev, next) => _.merge(prev, next))
});

// Start accepting connections.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Apollo server running on port ${url}`);
});
