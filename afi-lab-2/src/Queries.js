import gql from "graphql-tag";

export const GET_PEOPLE = gql `
{
  people{
    personID
    name
    town {
      id
      name
    }
  }
}
`

export const ADD_PERSON = gql `
  mutation  addPerson($name: String!, $townID: Int!) {
    addPerson(name:$name , townID: $townID) {
      personID
    }
  }
`

export const DELETE_PERSON = gql `
  mutation  deletePerson($id:Int!) {
    deletePerson(id:$id) {
      status
    }
  }
`
