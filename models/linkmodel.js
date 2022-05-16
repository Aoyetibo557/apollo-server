module.exports = (selquelize, Sequelize) => {
  const Links = selquelize.define(
    "links",
    {
      originalurl: {
        type: Sequelize.SRING,
        allowNull: false
      },
      shorturl: {
        type: Sequelize.SRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      createAt: true,
      updatedAt: true
    }
  );

  return Links;
};
