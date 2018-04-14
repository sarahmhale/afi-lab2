import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { Mutation } from "react-apollo";
import { DELETE_PERSON } from '../api/Queries'

export default class Error extends Component {
  render() {
    return (
      <Mutation mutation={DELETE_PERSON}>
        {(deletePerson, { data,error }) => (
          <div>An error! Please try again
            <Button bsStyle="danger" onClick={e => {
              e.preventDefault()
              this.props.id.map(id => deletePerson({ variables: { id: id} }))
            this.props.reset()
          }}>Try Again</Button>
        </div>
      )}
    </Mutation>)
  }
}
