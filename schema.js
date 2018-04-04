import db from './db'
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')


const StudentType = new GraphQLObjectType({
  name: 'Student',
  description: 'This represents a Student',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(person) {
          return person.id
        }
      },
      name: {
        type: GraphQLString,
        resolve(person) {
          return person.name
        }
      },
      year: {
        type: GraphQLInt,
        resolve(person) {
          return person.name
        }
      },
    }
  }
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
