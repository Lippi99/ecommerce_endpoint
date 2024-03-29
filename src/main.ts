import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: true,
});

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀  Server ready ready`);
});
