import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Container from '../elements/Container'
import {selectElement} from '../../actions/moveActions'
import _ from 'lodash'

class Builder extends Component {
 
  render() {
      const {elements} = this.props;
      const sorted = _.sortBy(elements,['sort'])

    return (<Fragment>
      {sorted.map(element => {
        const id = element.id;
        console.log(id)
        return(
          <div>
            <Container key={element.col} data={element} />
          </div>
          
        )
      })}
    </Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
    elements: state.elements
})


export default connect(mapStateToProps,{selectElement})(Builder)
