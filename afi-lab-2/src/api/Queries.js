import gql from "graphql-tag";

export const GET_PEOPLE = gql `
{
  people{
    personID
    name
    town {
      id
      townName
    }
  }
}
`



export const ADD_PERSON = gql `
  mutation  addPersonAndTown($name: String!, $id: Int!,$townName: String!) {
    addPersonAndTown(name:$name , id: $id,townName: $townName) {
      status
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
