const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.set("strictQuery", false)
mongoose.connect('mongodb://localhost:27017/booksApi')
mongoose.connection.once('open', () => {
    console.log('connected to DB')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // provides an interface for making queries.. also provides an auto documentation
}))

app.listen(4000, () => {
    console.log('Server listening on port 4000')
})