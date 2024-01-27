import axios from 'axios';
import React, { Component } from 'react';
import PubSub from 'pubsub-js';
export default class Search extends Component {

    searchChange = () => {
        const { keyElement: { value } } = this;
        PubSub.publish('updateState', { isFrist: false, isLoading: true });
        if (value) {
            axios.get(`http://localhost:3000/api/search/users?q=${value}`).then(
                response => {
                    PubSub.publish('updateState', { isLoading: false, imgList: response.data.items });
                },
                error => {
                    PubSub.publish('updateState', { isLoading: false, err: error.message });
                });
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
