import React, { Component } from 'react';
import ListItem from './listItem';
import listCss from './index.module.css';
export default class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <ul className={listCss.container}>
        {
          list.map((item, index) => {
            return <ListItem key={index} {...item} />;
          })}
      </ul>
    );
  }
}
