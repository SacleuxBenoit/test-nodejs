'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  TodoItem.associate = function(models) {
    // associations can be defined here
  };
  return TodoItem;
};