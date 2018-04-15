import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';

export default class FormExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTownChange = this.handleTownChange.bind(this);

    this.state = {
      name: '',
      townID: '',

    };
  }

  getValidationState() {
    const length = this.state.name.length;
    if (length !== 0) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleTownChange(e) {
    this.setState({ townID: e.target.value });
  }



  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addPerson({ variables: { name: this.state.name , townID: this.state.townID} });
          }}
        >
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handleNameChange}
          />
          <FormControl componentClass="select" placeholder="select" onChange={this.handleTownChange}>
            <option value="select">Break this shit</option>
            <option value="1">UMEÅ</option>
            <option value="2">FALUN</option>
            <option value="3">MORA</option>
            <option value="4">STOCKHOLM</option>
          </FormControl>
          <Button type="submit">Add Person</Button>
        </form>


        <Button bsStyle="success" onClick={this.props.reset}>Im done</Button>
      </div>

    );
  }
}
