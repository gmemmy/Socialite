import { gql } from 'apollo-server-express';

const typeDefs = gql`

type User {
  id: String!,
  username: String!,
  email: String!,
  hasProfile: Boolean!,
  isVerified: Boolean!,
  profileImage: String!
}
type Query {
  getUser(id: String!): User,
  getAllUsers: [User!]!
}
type Mutation {
  createUser(email: String!, username: String!): User!
}
`;

module.exports = typeDefs;
