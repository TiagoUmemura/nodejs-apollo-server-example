import { ApolloServer } from "@apollo/server";
import  {  startStandaloneServer  }  from  '@apollo/server/standalone' ;

import  typeDefs from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function startServer() {
  const { url } = await startStandaloneServer(server);

  console.log(`🚀 Server ready at ${url}`);
}

startServer();
