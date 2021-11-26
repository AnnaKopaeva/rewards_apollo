const express = require("express");

// Connect to DB
const db = require("./database");
db.connect();

async function startApolloServer(typeDefs, resolvers) {
  const server = require("./graphql").createApolloServer();

  await server.start();

  const app = express();

  require("./middlewares").init(app, db);

  server.applyMiddleware({
    app,
    path: "/",
  });

  // Modified server startup
  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
