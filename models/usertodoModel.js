module.exports = (sequelize, DataTypes) => {
  const userTodo = sequelize.define(
    'userTodo',
    {
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false },
  );
  return userTodo;
};
