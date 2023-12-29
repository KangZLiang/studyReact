import React, { Component } from 'react'
import item from './index.module.css'
export default class ListItem extends Component {
  render() {
    const { text, isChecked } = this.props
    return (
      <li className={item.listItem}>
        <label>
          <input type="checkbox" defaultChecked={isChecked}/>
          <span>{text}</span>
        </label>
        <button>删除</button>
      </li>
    )
  }
}
