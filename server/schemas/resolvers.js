const { User, Item, Category, Subcategory } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth");
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');
require('dotenv').config();




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

        const user = await User.findOne({ _id: context.user._id });
        return user;
      } catch (err) {
        console.log(err);
      }
    },

    itemById: async (parent, { _id }, context) => {
      try {
        const item = await Item.findOne({ _id });
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
        const subcategory = await Subcategory.findAll({ 
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

    itemsByCategory: async (parent, { subcategory_id, limit, offset }, context) => {
      try {
        const subcategory = await Item.findAll({ 
          where: {
            subcategory_id: subcategory_id
          },
          limit,
          offset
         });
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },

    allItemsByCategory: async (parent, { subcategory_id }, context) => {
      try {
        const subcategory = await Item.findAll({ 
          where: {
            subcategory_id: subcategory_id
          }
         });
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },

    searchByItem: async (parent, {item, limit, offset}, context) => {
      try {
        let allItems;
        if (item) {
        allItems = await Item.findAll({
        where: {
          item: {
            [Op.like]: `%${item}%`
          }
        },
        limit,
        offset
      })

    } else {
      allItems=[]
    }

      return allItems

      } catch (err) {
        console.log(err)
      }
    },

    searchItem: async (parent, {item}, context) => {
      try {
        
      const allItems = await Item.findAll({
        where: {
          item: {
            [Op.like]: `%${item}%`
          }
        },
      });
    
        

      return allItems

      } 
      
      catch (err) {
        console.log(err)
      }
    }

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
          const user = await User.create({
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
    },

    submitContactForm: async (parent, {name, email, message}, context) => {
      try {
        const transporter = nodemailer.createTransport({
          service: 'hotmail',
          host: 'smtp-mail.outlook.com',
          port: 587,
          tls: {
            ciphers: 'TLSv1.2',
            minVersion: 'TLSv1.2'
          },
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD

          },
          
        });


        const mailOptions = {
          from: 'alabamaslamma6@hotmail.com',
          to: 'alabamaslamma6@hotmail.com',
          subject: 'Thrift-Barn-Furniture inquiry',
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        }

        await transporter.sendMail(mailOptions);
        console.log('Email successfully sent')
        return true;

      } catch (error) {
        console.error('Error sending email:', error)
        return false;
      }
    }
  },
};



module.exports = resolvers;

