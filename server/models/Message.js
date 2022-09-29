module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    theme: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
  })

  Message.associate = (models) => {
    Message.belongsTo(models.User, { as: 'sender' })
    Message.belongsTo(models.User, { as: 'receiver', onDelete: 'CASCADE' })
  }
  return Message
}
