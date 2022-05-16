export default (sequelize, DataTypes) => {
  const Url = sequelize.define(
    "url",
    {
      originalurl: {
        type: DataTypes.STRING,
        unique: true
      },
      shorturl: {
        type: DataTypes.STRING,
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
