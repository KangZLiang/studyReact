import React, { Component } from 'react';
import ContianerItem from './containerItem';
import PubSub from 'pubsub-js';
export default class Container extends Component {
  state = {
    imgList: [],
    isLoading: false,
    isFrist: true,
    err: ''
  };
  pubSubTimer = null;
  componentDidMount() {
    this.pubSubTimer = PubSub.subscribe('updateState',this.updateSearchKey);
  }
  updateSearchKey = (name,data) => {
    this.setState(data);
  };
  componentWillUnmount() {
    PubSub.unsubscribe(this.pubSubTimer);
  }
  render() {
    const { imgList, isLoading, isFrist, err } = this.state;
    return (
      <div className='imgContain'>
        {
          isFrist ? <h1>首页</h1> :
            isLoading ? <h2>加载中</h2> :
              err ? <h2>{err}</h2> :
                imgList.map((item) => {
                  return <ContianerItem key={item.id} {...item} />;
                })
        }
      </div>
    );
  }
}
