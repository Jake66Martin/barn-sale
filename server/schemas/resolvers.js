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
        const items = await Item.findOne({ category });
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
        console.log(err)
      }
    },
  },
  Mutation: {},
};
