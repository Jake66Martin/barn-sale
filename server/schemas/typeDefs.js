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
    itemById(_id:ID!): Item
}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth,
    login(email: String!, password: String!): Auth

    addItem(item: String!, category: String!, description: String!, price: Int!, image: String!): Item,
    removeItem(_id: ID!): Item
}

`;

module.exports = typeDefs;
