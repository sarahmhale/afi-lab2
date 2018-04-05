import {
  readAll,
  readByStatement,
  create,
  deleteStatement,
  edit
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
      type: StatusType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        townID: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (_, args) => {
        return create(
          "person",
          "name , townID",
          "'" + args.name + "'," + args.townID
        ).then(res => "OK").catch(err => "ERROR")
      }
    },
    deletePerson: {
      type: StatusType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, args) => {
        return deleteStatement(
          "person",
          "personID",
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
        return edit(
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
