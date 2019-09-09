import { importSchema } from "graphql-import";
import { ApolloServer, AuthenticationError } from "apollo-server";
import _ from "lodash";
import db from "./utils/firebase";

import * as resolvers from "./graphs/resolvers";

const typeDefs = importSchema("./src/graphs/schema.graphql");

// not required but can be useful if you run multiple servers.
const PORT = process.env.PORT || 2999;

const server = new ApolloServer({
  typeDefs,
  context: req => new Context(req),
  resolvers: _.reduce(resolvers, (prev, next) => _.merge(prev, next)),
  formatError: err => {
    if (err.message.startsWith("Context creation failed: ")) {
      return new AuthenticationError(
        err.message.replace("Context creation failed: ", "")
      );
    }
    return err;
  },
  playground: true
});

// Start accepting connections.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Apollo server running on port ${url}`);
});

class Context {
  constructor(request) {
    const headers = request.req
      ? request.req.headers
      : request.connection.context;
    this.email = headers && headers.email;
    this.request = request.req;
    const strippedEmail = this.validate(headers).replace(/[.\#\$]/g, "--");
    this.ref = strippedEmail !== "" ? db.ref(strippedEmail) : null;
  }

  validate(headers) {
    if (!headers || !headers.email) {
      return "";
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(headers.email).toLowerCase())) {
      return "";
    }
    return headers.email;
  }
}
