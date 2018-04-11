import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from './Form'


export default class TransaktionButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ isLoading: true });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {

      return (
        <Form/>)
    } else {
      return (
        <div>
          <Button
            bsStyle="primary"
            onClick={!isLoading ? this.handleClick : null}
          >
            {'Transaktion'}
          </Button>
        </div>
      );
    }
  }
}
