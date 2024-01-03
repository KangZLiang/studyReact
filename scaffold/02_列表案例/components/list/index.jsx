import React, { Component } from 'react';
import ListItem from './listItem';
import listCss from './index.module.css';
import PropType from 'prop-types'
export default class List extends Component {
  static PropType = {
    updateOperate: PropType.func.isRequired,
    list: PropType.array.isRequired
  }
  render() {
    const { list ,updateOperate} = this.props;
    return (
      <ul className={listCss.container}>
        {
          list.map((item) => {
            return <ListItem key={item.id} {...item} updateOperate={updateOperate} />;
          })}
      </ul>
    );
  }
}
