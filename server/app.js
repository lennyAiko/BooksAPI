const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // provides an interface for making queries.. also provides an auto documentation
}))

app.listen(4000, () => {
    console.log('Server listening on port 4000')
})