import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { ADD_PERSON, GET_PEOPLE, DELETE_PERSON } from './Queries'


export default class FormExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.setID = this.setID.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTownChange = this.handleTownChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      value: '',
      town: '',
      id: []
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length != 0) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  handleNameChange(e) {
    this.setState({ value: e.target.value });
  }
  handleTownChange(e) {
    this.setState({ town: e.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  setID(id) {
    if (!id) {
      return <div/>
    } else {
      this.setState({ id: [...this.state.id, id] });

    }
  }



  reset() {
    return (
      <Mutation mutation={DELETE_PERSON}>
        {(deletePerson, { data,error }) => (
          <div>An error! Please try again
            <Button bsStyle="danger" onClick={e => {
              e.preventDefault()
              this.state.id.map(id => deletePerson({ variables: { id: id} }))
              this.props.reset()
            }}>Try Again</Button>
          </div>
      )}
    </Mutation>
    )
  }
  render() {
    console.log(this.state)

    return (
      <Mutation mutation={ADD_PERSON}
        update={(cache, { data: { addPerson } }) => {
          this.setID(addPerson.personID)
        }}>
        {(addPerson, { data,error }) => (

          <div>
            {(error) ? this.reset():
              <form
                onSubmit={e => {
                  e.preventDefault();
                  addPerson({ variables: { name: this.state.value , townID: this.state.town} });

                }}
              >
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter name"
                  onChange={this.handleNameChange}
                />
                <FormControl componentClass="select" placeholder="select" onChange={this.handleTownChange}>
                  <option value="select">select</option>
                  <option value="1">UMEÅ</option>
                  <option value="2">FALUN</option>
                  <option value="3">MORA</option>
                  <option value="4">STOCKHOLM</option>
                </FormControl>
                <Button type="submit">Add Todo</Button>
                <Button  bsStyle="danger" onClick={e => {
                  e.preventDefault();
                  addPerson({ variables: { name: this.state.value , townID: this.state.town} });

                }}>Break IT</Button>

              </form>
            }
          </div>
        )}
      </Mutation>
    );
  }
}
