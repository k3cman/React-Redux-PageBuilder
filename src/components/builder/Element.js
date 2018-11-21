import React, { Component } from 'react'

//Elements
import {H3Head} from '../elements/textElements';

export default class Element extends Component {
    renderElement = (type, data) => {
        let out = null;
        switch(type){
            case 'p':
                return(<p>{data}</p>)
            break;
            case 'h1':
                return (<h1>{data}</h1>)
            break
            case 'h3head':
                return <H3Head>{data}</H3Head>
            break;
            case 'image':
                return <img src={data} />
            break;
            case 'blockquote':
                return <blockquote>{data}</blockquote>
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
