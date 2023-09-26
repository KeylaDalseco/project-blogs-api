module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });
  // User.associate = (models) => {
  //   User.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' })
  // };
  return Category;
};