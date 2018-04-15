import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { ADD_PERSON } from '../api/Queries'
import Error from './Error'
import PersonForm from './PersonForm'


export default class FormExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.setID = this.setID.bind(this);

    this.state = {
      id: []
    };
  }



  setID(id) {
    if (!id) {
      return <div/>
    } else {
      this.setState({ id: [...this.state.id, id] });

    }
  }

  render() {
    return (
      <Mutation mutation={ADD_PERSON}
        update={(store, { data: { addPerson } }) => {
          this.setID(addPerson.personID)
        }}>
        {(addPerson, { data,error }) => (
          <div>
            {(error) ?
              <Error reset={this.props.reset} id={this.state.id}/>
              :
              <div>
                <PersonForm addPerson={addPerson} reset={this.props.reset}/>
                <div>Nr of added people {this.state.id.length}</div>
              </div>
            }
          </div>
        )}
      </Mutation>
    );
  }
}
