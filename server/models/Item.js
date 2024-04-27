const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Item extends Model {}

Item.init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key:'id'
      }
    },
    subcategory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'subcategory',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      // type: DataTypes.STRING,
      allowNull: false,
      get() {
        const value = this.getDataValue('image');
        return value ? JSON.parse(value) : null;
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "item",
  }
);

module.exports = Item;


