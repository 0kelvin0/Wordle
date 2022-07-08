const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLList
  } = require('graphql')

const { wordlist } = require('./Wordlist/words')

const wordType = new GraphQLObjectType({
    name: 'word',
    description: 'This is a word(5-letters)',
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      spelling: { type: new GraphQLNonNull(GraphQLString) },
      meaning: { type: new GraphQLNonNull(GraphQLString) },
    })
  })


const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
      getWords: {
        type: new GraphQLList(wordType),
        description: 'List of All words',
        resolve: () => wordlist
      },
      getWordByID:{
        type: wordType,
        description: 'Single word',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLInt)
            },
        },
        resolve: (root, args) => {
            return wordlist.find(word => word.id === args.id)
        }
      },
      checkWord:{
        type: GraphQLBoolean,
        description: 'Check if a word exists',
        args: {
            spelling: {
                type: new GraphQLNonNull(GraphQLString)
            },
        },
        resolve: (root, args) => {
            return wordlist.some(word => word.spelling === args.spelling)
        }
      },
      getNumWords:{
        type: GraphQLInt,
        description: 'Total number of available words',
        resolve: () =>  {
            return wordlist.length
        }
      }
    })
  })

const schema = new GraphQLSchema({
    query: RootQueryType
  })

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000);

console.log('🚀 Running a GraphQL API server at localhost:4000/graphql');