const typeDefs = `

type Item {
    _id: ID
    item: String
    category: String
    description: String
    price: Number
    image: String
}

type User {
    _id: ID
    userName: String
    email: String
    password: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    itemsByCategory(category: String!): [Item]
    itemById(_id:ID!): Item
}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addItem(item: String!, category: String!, description: String!, price: Number!, image: String!): Item
    removeItem(_id: ID!): Item
}

`;

module.exports = typeDefs;
