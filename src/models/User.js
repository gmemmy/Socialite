export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Username is required.',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email address is invalid.',
        },
        notNull: {
          args: true,
          msg: 'Email address cannot be empty.',
        },
        async exists(value) {
          const user = await User.findOne({
            where: {
              email: value,
            },
          });

          if (user) {
            throw new Error('User details already exist.');
          }
        },
      },
    },
    hasProfile: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: 'The URL sent is not a valid URL.',
        },
      },
    },
  }, {
  });
  // User.associate = (models) => {
  //   User.hasMany(models.Request, {
  //     foreignKey: 'userId',
  //     onDelete: 'CASCADE',
  //   });

  //   User.belongsToMany(models.Accommodation, {
  //     through: 'like',
  //     as: 'Accommodation',
  //   });
  // };
  return User;
};
