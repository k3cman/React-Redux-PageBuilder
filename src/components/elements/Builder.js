import React, { Component, Fragment } from 'react';
import BuilderElement from './BuilderElement'
import {connect} from 'react-redux'
import _ from 'lodash';

class Builder extends Component {
  render() {
    const {elements} = this.props;
    const sortedElements = _.sortBy(elements, ['element', 'sort'])
    console.log(sortedElements)
    return (
      <Fragment>
        {sortedElements.map( (e,index) => (
          <BuilderElement key={index} element={e} />
        ))}
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({
  elements: state.elements
})

export default connect(mapStateToProps,mapDispatchToProps)(Builder);
