
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hasProfile: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profileImage: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('Users'),
};
