import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
import models from './models';


const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

dotenv.config();
const app = express();
server.applyMiddleware({ app });
models.sequelize.authenticate();

models.sequelize.sync();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`Server ready at http://localhost:ocalhost:${port}${server.graphqlPath}`);
});

export default app;
