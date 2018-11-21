import React, { Component, Fragment } from 'react'
import {Container, Column} from '../elements/gridElements';
import BuildChildren from './BuildChildren'

class BuildElements extends Component {
   
  render() {
      const {children} = this.props.element
      const out = children.map((c, index) => (<BuildChildren key={index} child={c} />))
     return (
      <Fragment>
        <Container id={this.props.element.col}>
            {children.map((c, index) => (<BuildChildren key={index} child={c} />))}
        </Container>
        <br/>
      </Fragment>
    )
  }
}

export default BuildElements;
