import React, { Component, PropTypes } from 'react';

export default class AppComponent extends Component {

  handleClick =  function handleClick() {
    alert("clicked");
  };


  render() {
    const { isMobile} = this.props;
    console.log("props" + this.props);
    return (
      <div>
        <div onClick={this.handleClick}> Click Me </div>
        <h1>hello world {isMobile ? 'mobile' : 'desktop'} </h1>
        <div>{this.props.externalSite}</div>
      </div>
    );
  }
}

AppComponent.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
