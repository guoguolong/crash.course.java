const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    user(id: Float): User!
    friends: [User]
  },
  type User {
    id: ID
    name: String
  },
`);

const root = {
  user:  (params) => { 
    const {id} = params
    const users = {
        100: {id: 100, name: 'Allen'},
        200: {id: 200, name: 'Koda', weight: 140}
    }
    return users[id] || {alias: 'Judy', id: 999, name: 'Default'};
  },
  friends:  () => { 
    return [
        {id: 1, name: 'Xiami'},
        {id: 2, name: 'Pipiu'},
        {id: 3, name: 'Dude'},
    ] 
  },
  hello: () => 'Hello world!' 
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// const userSchema = {}
// app.use('/user', graphqlHTTP({
//   schema: userSchema,
//   rootValue: userRoot,
//   graphiql: true,
// }));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));