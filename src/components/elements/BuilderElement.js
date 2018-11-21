import React, { Component } from 'react'
import {H1,H2,H3} from './textElements';

export default class BuilderElement extends Component {
    _renderElement = element => {
        const {text} = element.options;
        switch(element.type){
            case 'h1':
                return <H1>{text}</H1>
            case 'h2':
                return <H2>{text}</H2>
            case 'h3':
                return <H3>{text}</H3>
            case 'p':
                return <p>{text}</p>
            default:
                return null;
        }
    }
  render() {
        console.log(this.props.element);
    return (
      <div>
        {this._renderElement(this.props.element)}
      </div>
    )
  }
}
