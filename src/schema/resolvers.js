const resolvers = {
  Query: {
    async getUser(root, { id }, { models }) {
      return models.User.findbyPk(id);
    },
    async getAllUsers(root, args, { models }) {
      return models.User.findAll();
    },
  },

  Mutations: {
    async createUser(root, { email, username }, { models }) {
      return models.User.create({
        email,
        username,
      });
    },
  },
};

module.exports = resolvers;
