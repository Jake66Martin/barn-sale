const { User, Item } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth");

const emailValidation = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      try {
        if (!context.user) {
          throw AuthenticationError;
        }

        const user = User.findOne({ _id: context.user._id });
        return user;
      } catch (err) {
        console.log(err);
      }
    },

    itemsByCategory: async (parent, { category }, context) => {
      try {
        const items = await Item.findAll({ category });
        return items;
      } catch (err) {
        console.log(err);
      }
    },

    itemById: async (parent, { _id }, context) => {
      try {
        const item = Item.findOne({ _id });
        return item;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    addUser: async (parent, { userName, email, password }, context) => {
      try {
        const isDuplicateEmail = await User.findOne({ email });

        if (isDuplicaterEmail) {
          throw new Error(
            "Email already exists. Please choose a different email."
          );
        }

        if (emailValidation.test(email) && passwordValidaiton.test(password)) {
          const user = User.create({
            userName,
            email,
            password,
          });
          const token = signToken(user);
          return { token, user };
        } else {
          console.log(
            "Error has occured. Confirm email and/or password format."
          );
        }
      } catch (err) {
        console.log(err);
        throw new Error(" An error has occured during user creation.");
      }
    },

    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },

    addItem: async (parent, { item, category, description, price, image }) => {
      try {
        const itemAdded = await Item.create({
          item,
          category,
          description,
          price,
          image,
        });
        return itemAdded;
      } catch (err) {
        console.log(err);
      }
    },

    removeItem: async (parent, { id }, context) => {
      try {
        const itemDeleted = await Item.findOneAndDelete({
          _id: id,
        });
        return itemDeleted;
      } catch (err) {
        console.log(err)
      }
    },
  },
};

module.exports = resolvers;

