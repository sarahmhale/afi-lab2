import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { ADD_PERSON } from '../api/Queries'
import Error from './Error'
import PersonForm from './PersonForm'


export default class FormExample extends Component {
  render() {
    return (
      <Mutation mutation={ADD_PERSON}>
        {(addPerson, { data,error }) => (
          <div>
            {(error) ?
              <Error/>
              :
              <div>
                <PersonForm addPerson={addPerson} reset={this.props.reset}/>
              </div>
            }
          </div>
        )}
      </Mutation>
    );
  }
}
