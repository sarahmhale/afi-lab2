import React from "react";
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import Table from './table'
import Transaktion from './transaktion/Transaktion'
const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/graphql"
});

const App = () => (


  <ApolloProvider client={client}>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"/>
    <div>
      <Transaktion/>
      <h2>AFI - LAB2</h2>
      <Table/>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
registerServiceWorker();
