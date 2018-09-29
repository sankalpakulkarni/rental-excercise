import React, { Component } from 'react';
import './styles.scss';

export default class Photo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enlarge: false,
        };
    }



    handleClick = (e) => {
        const currentState = this.state.enlarge;
        this.setState({ enlarge: !currentState });

    }

    render() {
        return (
            <div  className={this.state.enlarge ? 'photo enlarge': 'photo'}  >
                <img src={this.props.url}  className="image"  onClick={this.handleClick} />
                <div class="middle">
                    <div class="text">{this.props.caption}</div>
                </div>
            </div>
        );
    }
}