import React, { Component } from 'react'
import ContianerItem from './containerItem';

export default class Container extends Component {
  render() {
    const {imgList,isLoading,isFrist,err} = this.props
    return (
      <div className='imgContain'>
       {
        isFrist? <h1>首页</h1> :
        isLoading?<h2>加载中</h2>:
        err? <h2>{err}</h2>:
        imgList.map((item) =>{
           return <ContianerItem key={item.id} {...item}/>
        })
       }
      </div>
    )
  }
}
