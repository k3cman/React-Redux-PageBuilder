import React, { Component } from 'react'

export default class Element extends Component {
    renderElement = (type, data) => {
        let out = null;
        switch(type){
            case 'p':
                return(<p>{data}</p>)
            break;
            case 'h1':
                return (<h1>{data}</h1>)
            default:
            break
        }
        return out;
    }
  render() {
      console.log(this.props);
    return (
      <div className={`${this.props.col} columns`}>
        {this.renderElement(this.props.type, this.props.data)}
      </div>
    )
  }
}
