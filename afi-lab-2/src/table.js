import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import { Query } from "react-apollo"
import { GET_PEOPLE } from './api/Queries'

const columns = [{
  dataField: 'personID',
  text: 'ID'
}, {
  dataField: 'name',
  text: 'Name',
  filter: textFilter()
}, {
  dataField: 'town.townName',
  text: 'Town',
  filter: textFilter()
}];

export default () =>

<Query
  query={GET_PEOPLE}
>
  {({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
      return <BootstrapTable keyField='name' data={ data.people } columns={ columns } filter={ filterFactory()} />
  }}
</Query>
