# Server setup
## You can use the version tags on the repo to see the different stages of the server setup. 

# v1.0.0
## Install Packages
I use yarn, and these commands are for yarn but for the most part npm commands are very close. 
Start a project
`yarn init`

add apollo server, graphql and express
`yarn add apollo-server apollo-server-express graphql`

## Create File Structure
Now we are set to get started. let's create the file structure. 

`mkdir src`

create a file in `/src` called `server.js`

structure should look like this 

* package.json
* src
  * server.js

## fill the server file
more information at https://www.apollographql.com/docs/apollo-server/essentials/server/
```
const { ApolloServer, gql } = require("apollo-server");

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

```

## Modify Start Script
 open `package.json` and add the following entry

 ```
   "scripts": {
    "start": "node ./src/server.js"
  },
 ```

this will allow you to run `yarn start` and run your server. Test it out and see if it works

# v2.0.0
I prefer using webpack, so lets set that up. We will also get nodemon set up to monitor our dev server for changes and restart on changes. 
### Webpack
https://webpack.js.org/
### Nodemon
https://nodemon.io/

