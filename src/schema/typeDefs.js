import { gql } from 'apollo-server-express';

const typeDefs = gql`

type User {
  id: Int!,
  username: String!,
  email: String!,
  hasProfile: Boolean!,
  isVerified: Boolean!,
  profileImage: String!
}
type Query {
  getUser(id: Int!): User,
  getAllUsers: [User!]!
}
type Mutations {
  createUser(email: String!, username: String!): User!
}
`;

module.exports = typeDefs;
