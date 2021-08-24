import React from 'react';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName: ''
    }
  }

  handleCityNameChange = (event) => {
    this.setState({
      cityName: event.target.value
  })
}

  render() {
    return (
      <form>
        <div>
          <label>City Name</label>
          <input type='text' value={this.state.cityName} onChange={this.handleCityNameChange} />
          <Button variant="primary" size="md" active>
          Explore!
          </Button>{' '}
        </div>
      </form>
    )
  }
}

export default Form;
