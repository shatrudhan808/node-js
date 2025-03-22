require('dotenv').config()
const {ApolloServer} = require('@apollo/server')
const dbConnect = require('./database/db')
const {startStandaloneServer} = require('@apollo/server/standalone')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolver')

async function startServer() {
    await dbConnect()
    const server = new ApolloServer({
        typeDefs, resolvers
    })
    const {url} = await startStandaloneServer(server, {
        listen : {port: process.env.PORT}
    })
    console.log(` server ready at ${url}`);
    
}
startServer()