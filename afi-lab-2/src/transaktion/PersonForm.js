import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';

export default class FormExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTownIDChange = this.handleTownIDChange.bind(this);
    this.handleTownNameChange = this.handleTownNameChange.bind(this);

    this.state = {
      name: '',
      townID: '',
      townName: ''

    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleTownIDChange(e) {
    this.setState({ townID: e.target.value });
  }
  handleTownNameChange(e) {
    this.setState({ townName: e.target.value });
  }


  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addPerson({ variables: { name: this.state.name ,id: this.state.townID,townName: this.state.townName} });
          }}
        >
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handleNameChange}
          />
          <FormControl
            type="text"
            value={this.state.townName}
            placeholder="Enter townName"
            onChange={this.handleTownNameChange}
          />
          <FormControl
            type="text"
            value={this.state.townID}
            placeholder="Enter townID"
            onChange={this.handleTownIDChange}
          />

          <Button type="submit">Add Person</Button>
        </form>
      </div>
    );
  }
}
