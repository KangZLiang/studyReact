import React, { Component } from 'react';
import './App.css';
import List from './components/list';
import Header from './components/header';
import Footer from './components/footer';

export default class App extends Component {
  state = {
    todoList: [{
      isChecked: false,
      text: '吃饭',
      id: 1
    }]
  };
  updateValue = (data) => {
    const { todoList } = this.state;
    let todo = [data, ...todoList];
    this.setState({ todoList: todo});
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className='container'>
        <Header updateValue={this.updateValue} />
        <List list={todoList} />
        <Footer />
      </div>
    );
  }
}

