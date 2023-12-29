import React from "react";
import hello from "./hello.module.css"
export default class Hello extends React.Component {
    render() {
        return <div className={hello.appLink}>Hello {this.props.name}</div>;
    }
}