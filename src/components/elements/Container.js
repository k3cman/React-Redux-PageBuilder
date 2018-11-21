import React, { Component } from 'react'
import Element from '../builder/Element';

export default class Container extends Component {
  render() {
    const {children} = this.props.data;
    console.log(this.props.data)
    return (
      <div className="container" id={this.props.data.col}>
        {children.map(child => {
          return(
            <Element type={child.type} col={child.col} data={child.text} />
          )
        })}
      </div>
    )
  }
}
