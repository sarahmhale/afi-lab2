import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { ADD_PERSON, DELETE_PERSON } from '../api/Queries'
import Error from './Error'


export default class FormExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.setID = this.setID.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTownChange = this.handleTownChange.bind(this);

    this.state = {
      name: '',
      townID: '',
      id: []
    };
  }

  getValidationState() {
    const length = this.state.name.length;
    if (length != 0) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleTownChange(e) {
    this.setState({ townID: e.target.value });
  }


  setID(id) {
    if (!id) {
      return <div/>
    } else {
      this.setState({ id: [...this.state.id, id] });

    }
  }

  render() {
    console.log(this.state)
    return (
      <Mutation mutation={ADD_PERSON}
        update={(store, { data: { addPerson } }) => {
          this.setID(addPerson.personID)
        }}>
        {(addPerson, { data,error }) => (

          <div>
            {(error) ? <Error reset={this.props.reset} id={this.state.id}/>:
              <form
                onSubmit={e => {
                  e.preventDefault();
                  addPerson({ variables: { name: this.state.name , townID: this.state.townID} });
                  this.setState({name: '', townID: ''})

                }}
              >
                <FormControl
                  type="text"
                  value={this.state.name}
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
                <div>Nr of added people {this.state.id.length}</div>
                <Button type="submit">Add Person</Button>
              </form>
            }

            <Button bsStyle="success" onClick={this.props.reset}>Im done</Button>
          </div>
        )}
      </Mutation>
    );
  }
}
