import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormControll from './FormControll'


export default class TransaktionButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ isLoading: !this.state.isLoading });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {

      return (
        <FormControll reset={this.handleClick} />)
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
      )


    }
  }
}
