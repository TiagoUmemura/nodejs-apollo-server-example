import { ApolloServer } from "@apollo/server";
import  {  startStandaloneServer  }  from  '@apollo/server/standalone' ;

import { db } from "./database/db";


import  typeDefs from "./schema/typeDefs";
import { bookResolvers,  categoryResolvers} from "./schema/resolvers";

const resolvers = {
  Query: {
    ...bookResolvers.Query,
    ...categoryResolvers.Query,
  },
  Mutation: {
    ...categoryResolvers.Mutation,
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
  context: async () => ({
    db,
  }),
});

  console.log(`🚀 Server ready at ${url}`);
}

startServer();
