const typeDefs = `

type Item {
    _id: ID,
    category_id: ID,
    subcategory_id: ID,
    item: String,
    category: String,
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
    itemsByCategory(category: String!): [Item],
    itemById(_id:ID!): Item,
    userEmail(email: String!): Boolean
    subcategoryById(category_id:ID!): [Subcategory]
}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addItem(item: String!, description: String!, price: Int!, image: String!, category_id:ID!, subcategory_id:ID!): Item,
    removeItem(_id: ID!): Item

    addCategory(name: String!): Category
    addSubcategory(name: String!, category_id:ID!): Subcategory
}

`;

module.exports = typeDefs;
