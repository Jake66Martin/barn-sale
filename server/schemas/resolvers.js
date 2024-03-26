const { User, Item, Category, Subcategory } = require("../models/index");
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

    itemById: async (parent, { _id }, context) => {
      try {
        const item = Item.findOne({ _id });
        return item;
      } catch (err) {
        console.log(err);
      }
    },

    userEmail: async (parent, { email }, context) => {
      try {

        if (emailValidation.test(email)) {

        const user = await User.findOne({
           where: {
            email: email
           } 
          });

        return user !== null
        }
      } catch (error) {
        console.error("Error while checking duplicate email:", error);
        throw error;
      }
    },

    subcategoryById: async (parent, { category_id }, context) => {
      try {
        const subcategory = Subcategory.findAll({ 
          where: {
            category_id: category_id
          },
          attributes: ['_id', 'name', 'category_id']
         });
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },

    itemsByCategory: async (parent, { subcategory_id }, context) => {
      try {
        const subcategory = Item.findAll({ 
          where: {
            subcategory_id: subcategory_id
          }
         });
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    addUser: async (parent, { userName, email, password }, context) => {
      try {
        const isDuplicateEmail = await User.findOne({ 
          
          where: {
            email: email
          }
          });

        if (isDuplicateEmail) {
          throw new Error(
            "Email already exists. Please choose a different email."
          );
        }

        if (emailValidation.test(email) && passwordValidation.test(password)) {
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

    addItem: async (parent, { item, description, price, image, category_id, subcategory_id }) => {
      try {
        const itemAdded = await Item.create({
          item,
          description,
          price,
          image,
          category_id,
          subcategory_id
        });
        return itemAdded; 
        
      } catch (err) {
        console.log(err);
      }
    },

    removeItem: async (parent, { _id }, context) => {
      try {
        const itemDeleted = await Item.destroy({
          where: {
            id: _id
          }
        });
        return itemDeleted;
      } catch (err) {
        console.log(err)
      }
    },

    addCategory: async (parent, {name}, context) => {
      try {
       const category = await Category.create({name})
       return category
      } catch (err) {
        console.log(err)
      }
    },

    addSubcategory: async (parent, {name, category_id}, context) => {
      try {
      const subcategory = await Subcategory.create({name, category_id})
      return subcategory
      } catch (err) {
        console.log(err)
      }
    }
  },
};

module.exports = resolvers;

