module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
    },
  })

  User.associate = (models) =>
    User.hasMany(models.Message, { foreignKey: 'receiverId' })

  return User
}
