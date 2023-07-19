'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal }) {
      this.belongsTo(Animal, { foreignKey: 'animalId' });
    }
  }
  Image.init(
    {
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      animalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Animals', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );
  return Image;
};
