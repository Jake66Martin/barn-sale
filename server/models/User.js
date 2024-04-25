const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");


const sequelize = require("../config/connection.js");

class User extends Model {
  async beforeSave() {
    if (this.isNew || this.isModified("password")) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  }
  async isCorrectPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail(value) {
          if (!/.+@.+\..+/.test(value)) {
            throw new Error('Must enter a valid email.')
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isPassword(value) {
          if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
            throw new Error('Must enter a proper password format.')
          }
        }
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

User.addHook("beforeSave", async (user) => {
  if (user.password) {
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
    }
  });
  
  

module.exports = User;





