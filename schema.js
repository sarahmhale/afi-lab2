import db from './db'
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')


// const PersonType = new GraphQLObjectType({
//   name: 'Person',
//   description: 'This represents a Student',
//   fields: () => {
//     return {
//       id: {
//         type: GraphQLInt,
//         resolve(person) {
//           return person.id
//         }
//       },
//       name: {
//         type: GraphQLString,
//         resolve(person) {
//           return person.name
//         }
//       },
//       town: {
//         type: GraphQLInt,
//         resolve(person) {
//           return person.name
//         }
//       },
//     }
//   }
// })
const TownType = new GraphQLObjectType({
  name: 'Town',
  description: 'This represents a Town',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(town) {
          return town.id
        }
      },
      name: {
        type: GraphQLString,
        resolve(town) {
          return town.name
        }
      }
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    Persons: {
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
