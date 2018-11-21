import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Container from '../elements/Container'
import _ from 'lodash'

class Builder extends Component {
  render() {
      const {elements} = this.props;
      const sorted = _.sortBy(elements,['sort'])
      console.log(sorted);

    return (<Fragment>
      {sorted.map(element => {
        return(
          <Container data={element} />
        )
      })}
    </Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
    elements: state.elements
})


export default connect(mapStateToProps,{})(Builder)
