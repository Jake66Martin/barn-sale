const { User, Item, Category, Subcategory } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth.js");
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
const { GraphQLUpload } = require('graphql-upload');

require("dotenv").config();

const { Storage } = require("@google-cloud/storage");

const credentials = {
  type: 'service_account',
  project_id: process.env.GOOGLE_CLOUD_PROJECT_ID,
  private_key_id: process.env.GOOGLE_CLOUD_PRIVATE_KEY_ID,
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEmrnV7pK+GM7H\nC5yhppyCGOJANGL/v3kfIOTd2G8nuzgTYTyuxxfmbtYPI0CWohb/Q5tFdT3XqGDQ\nMjyoWIcizBoZ5vZW2FcrfTgoCie9ukz4YVX6r4PHl84Wt22rTYHOTxsGJmIWfutc\nNs+FwzXvYwPYOmk+h100xNmbwnZvyJomVlUTpjcCFLHe+do5p7x1+soanZTh6ltG\nlYuJT96XEZ/JFIjHN4mIojbk4cmyAA0WD+1/K6QFxouWqC5YzMwEXuhrxE3hZ8ot\nnZtknnyP0UKZ+QIgl7phf7Df0NVofV356NcysHZ68ss2dBG76FxjRB5+zy6znTtU\nS39yeyu5AgMBAAECggEALALB9oq3RUA667JlAAfS0cm9vicsATnM5KPBsAq/CUsf\nCLGT+sEdT8uAdjeLQh0rXj21YMVX0HLEJ18TlpDowWiksCc0fmjkDJt1qnrpfg6a\nI+DwNRO8wX2xWAL8VSRe2j75mvUVMJl9WPF5H6W9KWdGKU2cGTAGtKUbXIOZ7Tg7\niVBHx0bWYFsQLQbtoiwXzLTgNK1EsPxw91asiJ5aOSpsMhTPx2OTzRewxRhvbJUT\nibiqICWtq3BKEkoDutRSOKfLBPqVXvMQG1tBNuE4/IfB4cRQ+RAHkxS/08R8NJPt\nu9WBqc2BOLgVJBSZ/7JATRXfVXvSE3GPZWPGhlelnQKBgQDpm0v7uM/4bQ8f0LxW\n/lGA71O3QXXNphj6lTT+NIzvIMd88N9l9VkxMWbCjDHRmY63g7VTK0E4EiglX7WD\nuAeXHpMStjZwzdGk5hBQTBX38bXQVbUI2Msqk/yg/WFIi37FZEt5c8pQP6c0rMgJ\nXJyEf8cujm/fzesb6dNvg956TQKBgQDXc2Uab0Obko7cGPGgIHBFthzbLs7Ak5eD\n77WYaTFTK1T4bbz4n3nx6rZ5Ci6Yx9aWnVSiI8r7BQMvI0AFSUW5Anc/rkadYVWx\nuGkChS40hOWaPlREf9xKTHqdF2lym+5XL+jNHgcFD2rF6A630J+NypfQx9sVB4u6\nPBkKnLsVHQKBgQCllOsdyJi5GOxwe68T5n306y6mpWKP2ty3uUzvpmYDFXPxDnb6\nuRZ4dPDGk0K4s6RiVZwQEIfQ66XDH/z0GVxf9E8BI2ChQnIH9P65O8USkyRxQF7q\nn2gajPyzTAZJun6oAXgx5S4RBZ1KC/JaGGfkzwFq8ZFAzJ+KkInK8GigvQKBgCAU\nQHOFKY3abob6988dxVm72eQQvhwSXbb5VBKTZxK5Gve6by6doCyTBARVrcZ1ys+2\nMUnLBogFoQm9t+SRml4HrfW/XyhDu9ywVoJXjh+nwgALU8S3PPebF46YU80KxpwY\nuBMCa40nVICPItHfsEIObjhZ6Zbh/r4GALyBxaFJAoGAZJ1Whx3N2kuprRXbEMbw\ndSSXN0cpVkWkxnXr7cPa5BJuEZSYWch0jQCBKhhdyZ3k8I/FAnUrkdArwt1pU3Q1\n0cwwGxObU74imotho9iUyzSvn2XFv396mL7U/AVc0V5L3X4nqknXCaa3QXpDteQo\nqciyar2kUbped9iI5d8BVvk=\n-----END PRIVATE KEY-----\n",
  client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLOUD_CLIENT_ID,
  auth_uri: process.env.GOOGLE_CLOUD_AUTH_URI,
  token_uri: process.env.GOOGLE_CLOUD_TOKEN_URI,
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/image-storage%40soy-sound-399522.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"

}

const storage = new Storage({
    // keyFilename: "../soy-sound-399522-4b913f530ad1.json",
    credentials

});



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
        return subcategory;
      } catch (err) {
        console.log(err);
      }
    },

    searchByItem: async (parent, { item, limit, offset }, context) => {
      try {
        let allItems;
        if (item) {
          allItems = await Item.findAll({
            where: {
              item: {
                [Op.like]: `%${item}%`,
              },
            },
            limit,
            offset,
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
      { item, description, price, location, image, category_id, subcategory_id }
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

    addSubcategory: async (parent, { name, category_id }, context) => {
      try {
        const subcategory = await Subcategory.create({ name, category_id });
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




