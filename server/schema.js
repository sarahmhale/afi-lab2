import {
  readAll,
  readByStatement,
  deleteByStatement,
  update,
  createPerson,
  filterWithStoredProcedure
} from './db'
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
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
          return readByStatement(
            "town",
            "townID = " + person.townID
          ).then(value => value[0]);
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
      townName: {
        type: GraphQLString,
        resolve(town) {
          return town.townName
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
    },
    filterByID: {
      type: new GraphQLList(PersonType),
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (_, args) => {
        return filterWithStoredProcedure(args.id).then(value => value);
      }
    }
  })
})

const StatusType = new GraphQLObjectType({
  name: 'Status',
  fields: () => ({
    status: {
      type: GraphQLString,
      resolve: (status) => {
        return status
      }
    }
  })
})


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addPerson: {
      type: PersonType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        townID: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (_, args) => {
        return createPerson(args.name, args.townID).then(res => res).catch(err => err)
      }
    },
    deletePerson: {
      type: StatusType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, args) => {
        return deleteByStatement(
          "person",
          "personID = " +
          args.id
        ).then(res => "OK").catch(err => err)
      }
    },
    editPerson: {
      type: StatusType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        townID: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (_, args) => {
        return update(
          "person",
          "name = '" + args.name + "', townID =" + args.townID,
          "personID = " + args.id
        ).then(res => "OK").catch(err => err)
      }
    }
  })
})
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})
