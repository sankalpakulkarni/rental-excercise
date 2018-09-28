import React from "react";
import ReactDOM from "react-dom";
import MessageComponent from "./MessageComponent";


const Index = () => {
    return (<div>Hello React!</div>);
};

ReactDOM.render(<MessageComponent />, document.getElementById('content'));