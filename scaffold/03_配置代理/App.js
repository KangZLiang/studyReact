import axios from 'axios';
import React from 'react';

class App extends React.Component {
  getData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => { console.log('Response', response); },
      error => { console.log('error', error); });
    axios.get('http://localhost:3000/api2/cars').then(
      response => { console.log('Response1', response); },
      error => { console.log('error1', error); });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.getData}>点击</button>
      </div>
    );
  }
}
export default App;
