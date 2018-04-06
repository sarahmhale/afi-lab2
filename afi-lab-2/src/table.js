import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const row = [{
  id: 'A001',
  address: {
    postal: '1234-12335',
    city: 'Chicago'
  }
}]
const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'address.city',
  text: 'Name'
}, {
  dataField: 'price',
  text: 'Town'
}];

export default () =>
<BootstrapTable keyField='name' data={ row } columns={ columns } />
