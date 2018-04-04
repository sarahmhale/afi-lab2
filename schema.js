import db from './db'
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')


const StudentType = new GraphQLObjectType({
  name: 'Students',
  fields: () => ({
    name: { type: GraphQLString },
    courses: { type: GraphQLString },
    year: { type: GraphQLString },

  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    students: {
      type: GraphQLString,
      resolve: (_, args) => {
        return 'hello'
      }
    }
  })
})
module.exports = new GraphQLSchema({
  query: RootQuery
})
