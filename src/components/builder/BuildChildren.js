import React, { Component,Fragment } from 'react'
import {Column} from '../elements/gridElements';

class BuildChildren extends Component {
    renderChild = () => {
        const {child} = this.props
        const output = null;
        switch(child.type){
            case 'p':
                output = (<Column col={child.col}><p>{child.text}</p></Column>)
            default:
                return;
        }

    }
  render() {
    return (
      <Fragment>
        {this.renderChild}
      </Fragment>
    )
  }
}

export default BuildChildren;
