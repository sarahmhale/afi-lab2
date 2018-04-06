import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Query } from "react-apollo"
import gql from "graphql-tag";


const columns = [{
  dataField: 'personID',
  text: 'ID'
}, {
  dataField: 'name',
  text: 'Name'
}, {
  dataField: 'town.name',
  text: 'Town'
}];

export default () =>

<Query
  query={gql`
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
      `}
>
  {({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
      return <BootstrapTable keyField='name' data={ data.people } columns={ columns } />
  }}
</Query>
