'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ People }) {
      this.belongsTo(People, { foreignKey: 'peopleId' });
    }
  }
  Tarif.init(
    {
      dayOff: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      weekend: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      peopleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'People', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Tarif',
    }
  );
  return Tarif;
};
