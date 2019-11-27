export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          msg: 'The URL sent is not a valid URL.',
        },
      },
    },
    postCaption: {
      type: DataTypes.STRING,
      validate: {
        len: {
          arg: [1],
          msg: 'caption must be at least 1 character long',
        },
      },
    },
  });
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Post.hasMany(models.Comment, {
      foreignKey: 'commentId',
    });
  };
  return Post;
};
