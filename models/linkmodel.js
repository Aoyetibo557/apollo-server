module.exports = (sequelize, Sequelize) => {
  const Url = sequelize.define(
    "url",
    {
      originalurl: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      shorturl: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      slug: {
        type: Sequelize.STRING,
        unique: true
      }
    },
    {
      timestamps: true,
      createAt: true,
      updatedAt: true
    }
  );

  return Url;
};
