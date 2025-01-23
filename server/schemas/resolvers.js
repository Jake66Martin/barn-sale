const { User, Item, Category, Subcategory } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth.js");
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
const { GraphQLUpload } = require('graphql-upload');

require("dotenv").config();

const { Storage } = require("@google-cloud/storage");



// const storage = new Storage({
//     keyFilename: "../thrift-barn-furniture-5764a35c660f.json"
// });

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

    // itemById: async (parent, { _id }, context) => {
    //   try {
    //     console.log(_id);
    //     const item = await Item.findOne({
    //       where: { id: _id },
    //     });

    //     return item;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    itemById: async (parent, { _id }, context) => {
      try {
        console.log(_id);
        const item = await Item.findOne({
          where: { id: _id },
        });
    
        // Check if the item exists and if the image field is a string that needs parsing
        if (item && item.image && typeof item.image === 'string') {
          try {
            // Attempt to parse the image string into an array
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

    // allItemsById: async (parent, {_ids}, context) => {

    //   try {
    //     const items = await Item.findAll({
    //         where: {
    //             id: _ids,  // Handles an array of IDs
    //         },
    //     });

    //     return items;
    // } catch (error) {
    //     console.error(error);
    //     throw new Error("Error fetching items by IDs");
    // }
    // },

    allItemsById: async (parent, { _ids }, context) => {
      try {
        const items = await Item.findAll({
          where: {
            id: _ids, // Handles an array of IDs
          },
        });
    
        // Loop through the fetched items to check and parse the image field if needed
        items.forEach((item) => {
          if (item.image && typeof item.image === 'string') {
            try {
              // Attempt to parse the image string into an array
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

    // itemsByCategory: async (
    //   parent,
    //   { subcategory_id, limit, offset },
    //   context
    // ) => {
    //   try {
    //     const subcategory = await Item.findAll({
    //       where: {
    //         subcategory_id: subcategory_id,
    //       },
    //       limit,
    //       offset,
    //     });

    //     return subcategory;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

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
    
        // Loop through the fetched items to check and parse the image field if needed
        subcategory.forEach((item) => {
          if (item.image && typeof item.image === 'string') {
            try {
              // Attempt to parse the image string into an array
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

    // allItemsByCategory: async (parent, { subcategory_id }, context) => {
    //   try {
    //     const subcategory = await Item.findAll({
    //       where: {
    //         subcategory_id: subcategory_id,
    //       },
    //     });
    //     return subcategory;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    allItemsByCategory: async (parent, { subcategory_id }, context) => {
      try {
        const subcategory = await Item.findAll({
          where: {
            subcategory_id: subcategory_id,
          },
        });
    
        // Loop through the fetched items to check and parse the image field if needed
        subcategory.forEach((item) => {
          if (item.image && typeof item.image === 'string') {
            try {
              // Attempt to parse the image string into an array
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

    

    // ItemsByCategory2: async (parent, { item_category, filters }, context) => {
    //   let whereConditions = { item_category };
      
    //   if (filters.length > 0) {
    //     whereConditions.item_subcategory = { [Op.in]: filters };
    //   }
    
    //   return await Item.findAll({ where: whereConditions });
    // },

    ItemsByCategory2: async (parent, { item_category, filters }, context) => {
      let whereConditions = { item_category };
    
      if (filters.length > 0) {
        whereConditions.item_subcategory = { [Op.in]: filters };
      }
    
      // Fetch all items
      const items = await Item.findAll({ where: whereConditions });
    
      // Parse the 'image' field to convert the stringified JSON into an array
      const parsedItems = items.map(item => {
        // Parse image field if it exists and is a stringified array
        if (item.image && typeof item.image === 'string') {
          try {
            // Attempt to parse the stringified JSON array into an actual array
            item.image = JSON.parse(item.image);
          } catch (error) {
            console.error("Error parsing image field:", error);
            // If parsing fails, leave the image field as is or handle it accordingly
          }
        }
        return item;
      });
    
      // Return the modified items with parsed image field
      return parsedItems;
    },

    // AllItemsByCategory2: async (parent, { item_category, filters, limit, offset, sort_order }, context) => {
    //   let whereConditions = { item_category };
      
    //   if (filters && filters.length > 0) {
    //     whereConditions.item_subcategory = { [Op.in]: filters };
    //   }

    //   const order = sort_order === 'oldest' ? [['created_at', 'ASC']] : [['created_at', 'DESC']];


    
    //   const items =  await Item.findAll({ 
    //     where: whereConditions,
    //     limit,
    //     offset,
    //     order
    //    });

    //    console.log("Data being sent to frontend:", items);

    //    return items; // Return the fetched items
    // },

    AllItemsByCategory2: async (parent, { item_category, filters, limit, offset, sort_order }, context) => {
      let whereConditions = { item_category };
    
      if (filters && filters.length > 0) {
        whereConditions.item_subcategory = { [Op.in]: filters };
      }
    
      const order = sort_order === 'oldest' ? [['created_at', 'ASC']] : [['created_at', 'DESC']];
    
      // Fetch the items
      const items = await Item.findAll({ 
        where: whereConditions,
        limit,
        offset,
        order
      });
    
      // Parse the image field for each item to ensure it's an array
      const parsedItems = items.map(item => {
        let parsedImage = item.dataValues.image;
    
        // Check if the image field is a string and parse it, otherwise leave it as is
        if (typeof parsedImage === 'string') {
          try {
            parsedImage = JSON.parse(parsedImage); // Convert the stringified array to a real array
          } catch (error) {
            console.error(`Error parsing image for item ID ${item.id}:`, error);
            parsedImage = []; // Fallback to an empty array if parsing fails
          }
        }
    
        return {
          ...item.dataValues,
          image: parsedImage,
        };
      });
    
      // Log the data being sent to the frontend
      console.log("Parsed Data being sent to frontend:", parsedItems);
      return parsedItems; // Return the parsed items
    },


   
    // searchByItem: async (parent, { item, limit, offset, sort_order }, context) => {
    //   try {
    //     let allItems;
    //     if (item) {
    //       const order = sort_order === 'oldest' ? [['created_at', 'ASC']] : [['created_at', 'DESC']];

    //       allItems = await Item.findAll({
    //         where: {
    //           item: {
    //             [Op.like]: `%${item}%`,
    //           },
    //         },
    //         limit,
    //         offset,
    //         order
    //       });
    //     } else {
    //       allItems = [];
    //     }

    //     return allItems;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

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
    
          // Loop through the fetched items to check and parse the image field if needed
          allItems.forEach((item) => {
            if (item.image && typeof item.image === 'string') {
              try {
                // Attempt to parse the image string into an array
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

    // searchItem: async (parent, { item }, context) => {
    //   try {
    //     const allItems = await Item.findAll({
    //       where: {
    //         item: {
    //           [Op.like]: `%${item}%`,
    //         },
    //       },
    //     });

    //     return allItems;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    searchItem: async (parent, { item }, context) => {
      try {
        const allItems = await Item.findAll({
          where: {
            item: {
              [Op.like]: `%${item}%`,
            },
          },
        });
    
        // Loop through the fetched items to check and parse the image field if needed
        allItems.forEach((item) => {
          if (item.image && typeof item.image === 'string') {
            try {
              // Attempt to parse the image string into an array
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
          service: "hotmail",
          host: "smtp-mail.outlook.com",
          port: 587,
          tls: {
            ciphers: "TLSv1.2",
            minVersion: "TLSv1.2",
          },
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });

        const mailOptions = {
          from: "alabamaslamma6@hotmail.com",
          to: "alabamaslamma6@hotmail.com",
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

        // Generate a unique filename
        const newFilename = `${Date.now()}_${filename}`;
        const filePath = `item-images/${newFilename}`

        const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);
        const fileStream = bucket.file(filePath).createWriteStream();

         return new Promise((resolve, reject) => {
          createReadStream()
            .pipe(fileStream)
            .on('error', (error) => reject(error))
            .on('finish', () => {
              // // // Once the file has been uploaded, resolve with the public URL
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




