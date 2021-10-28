'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slides extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slides.belongsTo(models.Organization, {as: 'organization'});
    }
  };
  Slides.init({
    imageURL: DataTypes.STRING,
    text: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Slides',
  });
  return Slides;
};