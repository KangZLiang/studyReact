import React, { Component } from 'react'
import hedaer from './index.module.css'
import { nanoid } from 'nanoid'
import PropType from 'prop-types'
export default class Header extends Component {
  static PropType = {
    updateValue: PropType.func.isRequired
  }
  keyUp = (e) =>{
    const {keyCode,target} = e
    if(keyCode === 13 && target.value.trim() !== ''){
      this.props.updateValue({ isChecked: false, text: target.value, id: nanoid() } )
      target.value = ''
    }
  }
  render() {
    return (
      <div className={hedaer['todo-header']}>
        <input type="text" placeholder="Search" onKeyUp={this.keyUp} />
      </div>
    )
  }
}
