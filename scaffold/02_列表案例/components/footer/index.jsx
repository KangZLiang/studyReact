import React, { Component } from 'react';
import footer from './index.module.css';
export default class Footer extends Component {
  handleAll = (e) =>{
    const {checked} = e.target;
    this.props.updateAll(checked)
  }
  render() {
    const { list } = this.props;
    const checks = list.reduce((pre, next) => pre + (next.isChecked ? 1 : 0), 0);
    const lists = list.length
    return (
      <div className={footer.footer}>
        <label>
          <input type="checkbox" checked={checks === lists && lists !==0} onChange={this.handleAll} />
          <span>{checks}</span>/<span>{lists}</span>
        </label>
        <button onClick={e=>this.props.updateAll('del')}>删除已完成</button>
      </div>
    );
  }
}
