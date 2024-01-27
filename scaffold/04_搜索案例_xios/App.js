import React from 'react';
import Search from './components/search';
import Container from './components/container';

class App extends React.Component {
  state = { 
    imgList: [],
    isLoading:false,
    isFrist:true,
    err:''
   };
  updateSearchKey = (data) => {
    this.setState(data)
  };
  render() {
    return (
      <div className="App">
        <Search updateSearchKey={this.updateSearchKey} />
        <Container {...this.state} />
      </div>
    );
  }
}
export default App;
