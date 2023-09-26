module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
      }
    },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    createdAt: 'published', // a coluna published e minha coluna createdAt - passa valores "padrões"
    updatedAt: 'updated', // DAR O VALOR PADRÃO - ATUALIZA O UPDATE
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};