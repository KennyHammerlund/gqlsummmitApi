import { importSchema } from "graphql-import";
import { ApolloServer, AuthenticationError } from "apollo-server";
import _ from "lodash";
import db from "./utils/firebase";

import * as resolvers from "./graphs/resolvers";

const typeDefs = importSchema("./src/graphs/schema.graphql");

// not required but can be useful if you run multiple servers.
const PORT = 2999;

const server = new ApolloServer({
  typeDefs,
  context: req => new Context(req),
  resolvers: _.reduce(resolvers, (prev, next) => _.merge(prev, next)),
  formatError: err => {
    console.log(`*--err`, err);
    if (err.message.startsWith("Context creation failed: ")) {
      return new AuthenticationError(
        err.message.replace("Context creation failed: ", "")
      );
    }
    return err;
  }
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
    this.validate(headers);
    const strippedEmail = headers.email.replace(/[.\#\$]/g, "--");
    this.ref = db.ref(strippedEmail);
  }

  validate(headers) {
    if (!headers || !headers.email) {
      throw new AuthenticationError("No Email Provided");
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(headers.email).toLowerCase())) {
      throw new AuthenticationError("Email Malformed, must be a valid email");
    }
  }
}
