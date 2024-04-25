const { User, Item, Category, Subcategory } = require("../models/index");
const { signToken, AuthenticationError } = require("../utils/auth.js");
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
require("dotenv").config();

const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  keyFilename: "../../soy-sound-399522-4b913f530ad1.json",
});

const bucketName = "thrifting613";
const bucket = storage.bucket(bucketName);

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

  Mutation: {
    addUser: async (parent, { userName, email, password }, context) => {
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

    addItem: async (
      parent,
      { item, description, price, location, image, category_id, subcategory_id }
    ) => {
      try {
        if (subcategory_id === "") {
          const itemAdded = await Item.create({
            item,
            description,
            price,
            location,
            image,
            category_id,
          });
          return itemAdded;
        } else {
          const itemAdded = await Item.create({
            item,
            description,
            price,
            location,
            image,
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

    // uploadImage: async (_, { file }) => {
    //   try {
    //     const filename = `${uuidv4()}_${file.name}`;
    //     const fileUpload = bucket.file(filename);

    //     const stream = file.createReadStream();
    //     stream.pipe(fileUpload.createWriteStream());




    //     // await bucket.upload(file, {
    //     //   destination: filename,
    //     // });

       

    //     // Return information about the uploaded file
    //     return {
    //       url: `https://storage.googleapis.com/${bucketName}/${filename}`,
    //       filename: filename,
    //     };
    //   } catch (error) {
    //     console.error("Error uploading image:", error);
    //     throw new Error("Failed to upload image");
    //   }
    // },

    uploadImage: async (_, { file }) => {
      try {
        const { createReadStream, filename, mimetype } = file;

        // Generate a unique filename
        const newFilename = `${Date.now()}_${filename}`;

        // Upload the file to Google Cloud Storage
        const fileUploadPromise = new Promise((resolve, reject) => {
          createReadStream()
            .pipe(
              bucket.file(newFilename).createWriteStream({
                resumable: false,
                gzip: true,
                contentType: mimetype,
              })
            )
            .on('error', (error) => {
              reject(error);
            })
            .on('finish', () => {
              resolve();
            });
        });

        await fileUploadPromise;

        // Return the URL of the uploaded file
        // console.log(url)
        return { url: `https://storage.googleapis.com/${bucketName}/${newFilename}` };
      } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('Failed to upload file');
      }
    },
  },
};

module.exports = resolvers;




