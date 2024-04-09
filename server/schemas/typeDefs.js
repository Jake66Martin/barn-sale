const typeDefs = `

type Item {
    _id: ID,
    category_id: ID,
    subcategory_id: ID,
    item: String,
    location: String,
    description: String,
    price: Int,
    image: String
}

type Category {
    _id: ID,
    name: String
}

type Subcategory {
   _id: ID,
   name: String,
   category_id: ID
}

type User {
    _id: ID,
    userName: String,
    email: String,
    password: String
}

type Auth {
    token: ID!,
    user: User
}

type Query {
    me: User,
    itemsByCategory(subcategory_id: ID!, offset: Int!, limit: Int!): [Item],
    allItemsByCategory(subcategory_id: ID!): [Item],
    itemById(_id:ID!): Item,
    userEmail(email: String!): Boolean
    subcategoryById(category_id:ID!): [Subcategory]
    searchByItem(item: String!, offset: Int!, limit: Int!): [Item]
    searchItem(item: String!): [Item]
}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addItem(item: String!, description: String!, price: Int!, location: String!, image: String!, category_id:ID!, subcategory_id:ID!): Item,
    removeItem(_id: ID!): Item

    addCategory(name: String!): Category
    addSubcategory(name: String!, category_id:ID!): Subcategory

    submitContactForm(name: String!, email: String!, message: String!): Boolean
}

`;

module.exports = typeDefs;
