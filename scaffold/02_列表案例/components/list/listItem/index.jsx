import React, { Component } from 'react'
import item from './index.module.css'
import PropType from 'prop-types'
export default class ListItem extends Component {
  static PropType = {
    updateOperate: PropType.func.isRequired,
    text: PropType.string.isRequired,
    id: PropType.string.isRequired,
    isChecked: PropType.bool.isRequired,
  }
  state = {backColor:false}
  handleMouse = (flag) =>{
    return () =>{
      this.setState({backColor: flag})
    }
  }
  updateCheck = (e,type) =>{
    const { id } = this.props;

    if(type === 'update') {
      const {checked} =e.target;
      this.props.updateOperate({id,type,value:checked })
    }else if(type === 'del') {
      window.confirm('是否删除') && this.props.updateOperate({id,type})
    }
  }
  render() {
    const { text, isChecked } = this.props;
    const { backColor } = this.state;
    return (
      <li style={{backgroundColor: backColor? '#ccc' : ''}} className={item.listItem} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={isChecked} onChange={e=>this.updateCheck(e,'update')}/>
          <span>{text}</span>
        </label>
        <button style={{display:backColor?'block':'none' }} onClick={e=>this.updateCheck(e,'del')}>删除</button>
      </li>
    )
  }
}
