import React, { Component } from 'react';
import './styles.scss';

export default class Photo extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="photo">
                <img src={this.props.url}  class="image" />
                <div class="middle">
                    <div class="text">{this.props.caption}</div>
                </div>
            </div>
        );
    }
}