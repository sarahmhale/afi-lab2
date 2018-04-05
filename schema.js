import { readAll, readByStatement } from './db'
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')


const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'This represents a Student',
  fields: () => {
    return {
      personID: {
        type: GraphQLInt,
        resolve(person) {
          return person.personID
        }
      },
      name: {
        type: GraphQLString,
        resolve(person) {
          return person.name
        }
      },
      town: {
        type: TownType,
        resolve: (person) => {
          return readByStatement("town", "townID = " + person.townID).then(value => value[0]);
        }
      }
    }
  }
})
const TownType = new GraphQLObjectType({
  name: 'Town',
  description: 'This represents a Town',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(town) {
          return town.townID
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
    people: {
      type: new GraphQLList(PersonType),
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (_, args) => {
        return readAll("person").then(value => value);
      }
    },
    town: {
      type: new GraphQLList(TownType),
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (_, args) => {
        return readAll("town").then(value => value);
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
