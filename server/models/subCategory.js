const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Subcategory extends Model {}

Subcategory.init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
    category_name: {
      type: DataTypes.STRING,
      references: {
        model: "category",
        key: "name"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "subcategory",
  }
);

module.exports = Subcategory;
