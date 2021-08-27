import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log('Location IQ Data', response);

    this.setState({location: response.data[0]})
  }

  getMap = async () => {
    const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    console.log('Location IQ Data', response);

    this.setState({location: response.data[0]})
  }

  render() {
    return(
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} value={this.state.searchQuery} placeholder="search for a city"></input>
        <Button onClick={this.getLocation} variant='dark'>Explore!</Button>{' '};
        {this.state.location.place_id &&  
          <div>
            <h5 class="card-title">{this.state.location.display_name}</h5>
            <p class="card-text">Latitude: {this.state.location.lat}</p>
            <p class="card-text">Latitude: {this.state.location.lon}</p> 
          </div>
        }
      </>
    )
  }}


export default App;

