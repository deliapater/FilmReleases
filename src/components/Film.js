import React, { Component } from 'react';

class Film extends Component{
  render(){
    const {children, name} = this.props

    return (
      <div className="film">
      <h4>{children}</h4>
      <p>{name}</p>
      </div>
    )
  }
}
export default Film;
