import React, { Component } from 'react';

import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


export default class FormExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTownChange = this.handleTownChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '',
      town: ''
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

  render() {
    console.log(this.state)
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter name"
            onChange={this.handleNameChange}
          />
          <FormControl.Feedback />

          <ControlLabel>Choose Town</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={this.handleTownChange}>
            <option value="select">select</option>
            <option value="1">UMEÅ</option>
          </FormControl>
        </FormGroup>
        <Button type="submit" onClick={this.handleSubmit}>Submit</Button>

      </form>
    );
  }
}
