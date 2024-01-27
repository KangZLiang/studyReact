import React from 'react';
import Search from './components/search';
import Container from './components/container';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Search />
        <Container />
      </div>
    );
  }
}
export default App;
