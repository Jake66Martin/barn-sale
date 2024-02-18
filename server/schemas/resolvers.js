const {User, Item} = require('../models/index');
const { signToken, AuthenticationError } = require('../utils/auth')

const emailValidation = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const resolvers = {
    Query: {

    },
    Mutation: {
        
    }
}