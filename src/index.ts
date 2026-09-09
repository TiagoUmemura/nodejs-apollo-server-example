import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import  {  startStandaloneServer  }  from  '@apollo/server/standalone' ;

import { db } from "./database/db";

import  typeDefs from "./schema/typeDefs";
import { bookResolvers,  categoryResolvers, reviewResolvers, usersResolvers} from "./schema/resolvers";

import { pool } from "./pg-db";
import type { Pool } from "pg";

const resolvers = {
  Query: {
    ...bookResolvers.Query,
    ...categoryResolvers.Query,
    ...reviewResolvers.Query,
    ...usersResolvers.Query
    
  },
  Mutation: {
    ...categoryResolvers.Mutation,
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export interface MyContext {
  db: typeof db;
  pool: Pool;
}

async function startServer() {
  const { url } = await startStandaloneServer(server, {
  context: async (): Promise<MyContext> => ({
      db,
      pool,
  }),
});

  console.log(`🚀 Server ready at ${url}`);
}

startServer();
