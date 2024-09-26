

const typeDefs = `

scalar Upload

scalar JSON

type File {
    url: String!
  }

  type Mutation {
    uploadImage(file: Upload!): File!
  }


type Item {
    _id: ID,
    category_id: ID,
    subcategory_id: ID,
    item: String,
    location: String,
    description: String,
    price: Int,
    image: JSON
}

type Category {
    _id: ID,
    name: String
}

type Subcategory {
   _id: ID,
   name: String,
   category_id: ID,
   category_name: String
}

type User {
    _id: ID,
    email: String,
    password: String
}

type Auth {
    token: ID!,
    user: User
}

type Query {
    me: User,
    categories(category_id: ID!, offset: Int!, limit: Int!): [Item],
    category(category_id: ID!): [Item],
    itemsByCategory(subcategory_id: ID!, offset: Int!, limit: Int!): [Item],
    allItemsByCategory(subcategory_id: ID!): [Item],
    itemById(_id:ID!): Item,
    userEmail(email: String!): Boolean
    subcategoryById(category_id:ID!): [Subcategory]
    subcategoryByName(name:String!): [Subcategory]
    searchByItem(item: String!, offset: Int!, limit: Int!): [Item]
    searchItem(item: String!): [Item]
}

type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addItem(item: String!, description: String!, price: Int!, location: String!, image:[JSON]!, category_id:ID!, subcategory_id:ID!): Item,
    removeItem(_id: ID!): Item

    addCategory(name: String!): Category
    addSubcategory(name: String!, category_id:ID!, category_name:String!): Subcategory

    submitContactForm(name: String!, email: String!, message: String!): Boolean

}

`;

module.exports = typeDefs
