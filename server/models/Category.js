const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection.js')

class Category extends Model { }

Category.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      } 
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category',
}
)

module.exports = Category;

