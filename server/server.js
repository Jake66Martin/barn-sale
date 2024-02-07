const express = require('express');
const {expressMiddleware} = require('@apollo/server/express4')
const path = require('path');
const {apolloServer} = require('@apollo/server')
const {authMiddleware} = require('./utils/auth')

const {typeDefs, resolvers} = require('./schemas')
const db = require('./config/connection')