const { User, Item, Category, Subcategory } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth.js");
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
const { GraphQLUpload } = require('graphql-upload');

require("dotenv").config();

const { Storage } = require("@google-cloud/storage");





const storage = new Storage ({
  keyFilename: "/etc/secrets/thrift-barn-furniture-5764a35c660f.json"
})





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

        const user = await User.findOne({ 
          where: {
          _id: context.user._id 
          }
        });
        return user;
      } catch (err) {
        console.log(err);
      }
    },

    

    itemById: async (parent, { _id }, context) => {
      try {
        console.log(_id);
        const item = await Item.findOne({
          where: { id: _id },
        });
    
        if (item && item.image && typeof item.image === 'string') {
          try {
            item.image = JSON.parse(item.image);
          } catch (error) {
            console.error("Error parsing image field:", error);
          }
        }
    
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
              email: email,
            },
          });

          return user !== null;
        }
      } catch (error) {
        console.error("Error while checking duplicate email:", error);
        throw error;
      }
    },

    

    allItemsById: async (parent, { _ids }, context) => {
      try {
        const items = await Item.findAll({
          where: {
            id: _ids,
          },
        });
    
        items.forEach((item) => {
          if (item.image && typeof item.image === 'string') {
            try {
              item.image = JSON.parse(item.image);
            } catch (error) {
              console.error("Error parsing image field:", error);
            }
          }
        });
    
        return items;
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching items by IDs");
      }
    },

    subcategoryById: async (parent, { category_id }, context) => {
      try {
        const subcategory = await Subcategory.findAll({
          where: {
            category_id: category_id,
          },
          attributes: ["_id", "name", "category_id"],
        });
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },

    subcategoryByName: async (parent, { name }, context) => {
      try {
        const subcategory = await Subcategory.findAll({
          where: {
            category_name: name,
          },
          attributes: ["_id", "name", "category_id", "category_name"],
        });
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },

    categories: async (parent, { category_id, limit, offset }, context) => {
      try {
        const itemsByCat = await Item.findAll({
          where: {
            category_id: category_id,
          },
          limit,
          offset,
        });
        return itemsByCat;
      } catch (err) {
        console.log(err);
      }
    },

    category: async (parent, { category_id }, context) => {
      try {
        const itemsByCat = await Item.findAll({
          where: {
            category_id: category_id,
          },
        });
        return itemsByCat;
      } catch (err) {
        console.log(err);
      }
    },

    

    itemsByCategory: async (
      parent,
      { subcategory_id, limit, offset },
      context
    ) => {
      try {
        const subcategory = await Item.findAll({
          where: {
            subcategory_id: subcategory_id,
          },
          limit,
          offset,
        });
    
        subcategory.forEach((item) => {
          if (item.image && typeof item.image === 'string') {
            try {
              item.image = JSON.parse(item.image);
            } catch (error) {
              console.error("Error parsing image field:", error);
            }
          }
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
            subcategory_id: subcategory_id,
          },
        });
    
        subcategory.forEach((item) => {
          if (item.image && typeof item.image === 'string') {
            try {
              item.image = JSON.parse(item.image);
            } catch (error) {
              console.error("Error parsing image field:", error);
            }
          }
        });
    
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },

    

    

    ItemsByCategory2: async (parent, { item_category, filters }, context) => {
      let whereConditions = { item_category };
    
      if (filters.length > 0) {
        whereConditions.item_subcategory = { [Op.in]: filters };
      }
    
      const items = await Item.findAll({ where: whereConditions });
    
      const parsedItems = items.map(item => {
        if (item.image && typeof item.image === 'string') {
          try {
            item.image = JSON.parse(item.image);
          } catch (error) {
            console.error("Error parsing image field:", error);
          }
        }
        return item;
      });
    
      return parsedItems;
    },

  



    
    

    AllItemsByCategory2: async (parent, { item_category, filters, limit, offset, sort_order }, context) => {
      let whereConditions = { item_category };
    
      if (filters && filters.length > 0) {
        whereConditions.item_subcategory = { [Op.in]: filters };
      }
    
      const order = sort_order === 'oldest' ? [['created_at', 'ASC']] : [['created_at', 'DESC']];
    
      const items = await Item.findAll({ 
        where: whereConditions,
        limit,
        offset,
        order
      });
    
      const parsedItems = items.map(item => {
        let parsedImage = item.dataValues.image;
    
        if (typeof parsedImage === 'string') {
          try {
          } catch (error) {
            console.error(`Error parsing image for item ID ${item.id}:`, error);
          }
        }
    
        return {
          ...item.dataValues,
          image: parsedImage,
        };
      });
    
      console.log("Parsed Data being sent to frontend:", parsedItems);
      return parsedItems; 
    },


   
    

    searchByItem: async (parent, { item, limit, offset, sort_order }, context) => {
      try {
        let allItems;
        if (item) {
          const order = sort_order === 'oldest' ? [['created_at', 'ASC']] : [['created_at', 'DESC']];
    
          allItems = await Item.findAll({
            where: {
              item: {
                [Op.like]: `%${item}%`,
              },
            },
            limit,
            offset,
            order
          });
    
          allItems.forEach((item) => {
            if (item.image && typeof item.image === 'string') {
              try {
                item.image = JSON.parse(item.image);
              } catch (error) {
                console.error("Error parsing image field:", error);
              }
            }
          });
        } else {
          allItems = [];
        }
    
        return allItems;
      } catch (err) {
        console.log(err);
      }
    },

    

    searchItem: async (parent, { item }, context) => {
      try {
        const allItems = await Item.findAll({
          where: {
            item: {
              [Op.like]: `%${item}%`,
            },
          },
        });
    
        allItems.forEach((item) => {
          if (item.image && typeof item.image === 'string') {
            try {
              item.image = JSON.parse(item.image);
            } catch (error) {
              console.error("Error parsing image field:", error);
            }
          }
        });
    
        return allItems;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Upload: GraphQLUpload,
  Mutation: {
    addUser: async (parent, { email, password }, context) => {
      try {
        const isDuplicateEmail = await User.findOne({
          where: {
            email: email,
          },
        });

        if (isDuplicateEmail) {
          throw new Error(
            "Email already exists. Please choose a different email."
          );
        }

        if (emailValidation.test(email) && passwordValidation.test(password)) {
          const user = await User.create({
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
        const user = await User.findOne({ 
          where: {
            email: email,
          },
         });

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

    addItem: async (
      parent,
      { item, description, price, location, image, category_id, subcategory_id, item_subcategory, item_category }
    ) => {
      try {
        const imageData = Array.isArray(image) ? image : [image]; 

        if (subcategory_id === "") {
          const itemAdded = await Item.create({
            item,
            description,
            price,
            location,
            image: imageData,
            category_id,
            item_category,
            created_at: new Date()
          });
          return itemAdded;
        } else {
          const itemAdded = await Item.create({
            item,
            description,
            price,
            location,
            image: imageData,
            category_id,
            subcategory_id,
            item_category,
            item_subcategory,
            created_at: new Date()
          });
          return itemAdded;
        }
      } catch (err) {
        console.log(err);
      }
    },

    removeItem: async (parent, { _id }, context) => {
      try {
        const itemDeleted = await Item.destroy({
          where: {
            id: _id,
          },
        });
        return itemDeleted;
      } catch (err) {
        console.log(err);
      }
    },

    removeItems: async (parent, { _id }, context) => {
      try {
        const deletedCount = await Item.destroy({
          where: {
            id: {
              [Op.in]: _id, 
            },
          },
        });
    
        return {
          success: true,
          message: `${deletedCount} item(s) removed successfully.`,
          deletedCount, 
        };
      } catch (error) {
        console.error("Error removing items:", error);
        throw new Error("Failed to remove items.");
      }
    },

    addCategory: async (parent, { name }, context) => {
      try {
        const category = await Category.create({ name });
        return category;
      } catch (err) {
        console.log(err);
      }
    },

    addSubcategory: async (parent, { name, category_id, category_name }, context) => {
      try {
        const subcategory = await Subcategory.create({ name, category_id, category_name });
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },

    submitContactForm: async (parent, { name, email, message }, context) => {
      try {
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
         
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });

        const mailOptions = {
          from: "thriftbarnfurniture@gmail.com",
          to: "thriftbarnfurniture@gmail.com",
          subject: "Thrift-Barn-Furniture inquiry",
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email successfully sent");
        return true;
      } catch (error) {
        console.error("Error sending email:", error);
        return false;
      }
    },

   
    uploadImage: async (_, { file }) => {
      try {
        const { createReadStream, filename, mimetype } = await file;

        const newFilename = `${Date.now()}_${filename}`;
        const filePath = `item-images/${newFilename}`

        const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);
        const fileStream = bucket.file(filePath).createWriteStream();

         return new Promise((resolve, reject) => {
          createReadStream()
            .pipe(fileStream)
            .on('error', (error) => reject(error))
            .on('finish', () => {
              const publicUrl = `https://storage.googleapis.com/${process.env.GOOGLE_CLOUD_BUCKET_NAME}/${filePath}`;
              const fileObject = { url: publicUrl };
              resolve(fileObject);
            });
        });

      
      } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('Failed to upload file');
      }
    },
  },
};

module.exports = resolvers;




