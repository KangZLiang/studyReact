// import axios from 'axios';
import React, { Component } from 'react';
import PubSub from 'pubsub-js';
export default class Search extends Component {

    searchChange = async () => {
        const { keyElement: { value } } = this;
        PubSub.publish('updateState', { isFrist: false, isLoading: true });
        if (value) {
            /*  复杂写法
            fetch(`/api/search/users2?q=${value}`).then(
                 response => {
                     return response.json();
                 },
                 error => {
                     return new Promise(() => { });
                 }
             ).then(
                 response => {
                     console.log(response);
                 },
                 error => {
                     console.log(error);
                 }); */
            //  简写
            try {
                let response = await fetch(`/api/search/users2?q=${value}`);
                let data = await response.json();
                PubSub.publish('updateState', { isLoading: false, imgList: data.items });
            } catch (error) {
                PubSub.publish('updateState', { isLoading: false, err: error.message });
            }
        }
    };
    render() {
        return (
            <div>
                <h4>输入搜索名</h4>
                <input type='text' ref={c => this.keyElement = c}></input>
                <button onClick={this.searchChange}>搜索</button>
            </div>
        );
    }
}
