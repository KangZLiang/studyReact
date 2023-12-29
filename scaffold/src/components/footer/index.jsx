import React, { Component } from 'react'
import footer from './index.module.css'
export default class Footer extends Component {
  render() {
    return (
      <div className={footer.footer}>
        <label>
          <input type="checkbox" />
          <span>123</span>/<span>123456</span>
        </label>
        <button>xxx</button>
      </div>
    )
  }
}
