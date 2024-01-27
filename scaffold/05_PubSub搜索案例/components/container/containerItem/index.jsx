import React, { Component } from 'react';

export default class ContianerItem extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props;
    return (
      <div className='itemImg'>
        <a rel="noreferrer" href={html_url} target="_blank">
          <img src={avatar_url} alt=''></img>
        </a>
        <p>{login}</p>
      </div>
    );
  }
}
