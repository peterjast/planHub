module.exports = function(sequelize, DataTypes){
  var Tasks = sequelize.define("Tasks",{
      task_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1,60]
          }
      },
      completed: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }

  });

  Tasks.associate = function(models){
      Tasks.belongsTo(models.Accounts, {
          foreignKey: "owner_id"
      });
  };

  return Tasks;
};