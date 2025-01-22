const express = require('express');
const {expressMiddleware} = require('@apollo/server/express4');
const path = require('path');
const {ApolloServer} = require('@apollo/server');
const {authMiddleware} = require('./utils/auth.js');
const {graphqlUploadExpress} = require('graphql-upload')


require('dotenv').config();


const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();

    app.use(graphqlUploadExpress());

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    

    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware,
    }));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist', 'index.html'))
        });
    }

    // db.sync({force: false}).then(() => {
    //     app.listen(PORT,   () => {
    //         // app.listen(PORT, '0.0.0.0',  () => {
    //         console.log(`API servers running on port ${PORT}`);
    //         console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
    //     });
    // });

    if (process.env.NODE_ENV !== 'production') {
        db.sync({force: false}).then(() => {
            app.listen(PORT, '0.0.0.0', () => {
                console.log(`API servers running on port ${PORT}`);
                console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
            });
        });
    } else {
        // Just start the app without syncing in production
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`API servers running on port ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
        });
    }
};

startApolloServer();






