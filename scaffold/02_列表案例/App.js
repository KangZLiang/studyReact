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
    this.setState({ todoList: todo });
  };
  updateOperate = (data) => {
    const { todoList } = this.state;
    let list = [];
    if (data.type === 'update') {
      list = todoList.map(obj => {
        if (obj.id === data.id) return { ...obj, isChecked: data.value };
        else return obj;
      });
    } else if (data.type === 'del') {
      list = todoList.filter(obj => obj.id !== data.id);
    }
    this.setState({ todoList: list });
  };
  updateAll = (value) => {
    const { todoList } = this.state;
    let list = [];
    if(value  === 'del') {
      list = todoList.filter(obj => !obj.isChecked);
    }else {
      list = todoList.map(obj => {
        return { ...obj, isChecked: value };
      });
    }
    this.setState({ todoList: list });
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className='container'>
        <Header updateValue={this.updateValue} />
        <List list={todoList} updateOperate={this.updateOperate} />
        <Footer list={todoList} updateAll={this.updateAll} />
      </div>
    );
  }
}

