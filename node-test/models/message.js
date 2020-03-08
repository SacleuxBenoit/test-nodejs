'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    idUser: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Message.associate = function(models) {
    models.Message.belongsTo(models.User,{
      foreignkey:{
        allowNull:false
      }
    })
  };
  return Message;
};