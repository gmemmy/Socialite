export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Comment.associate = (models) => {
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Comment;
};
