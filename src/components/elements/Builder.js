import React, { Component, Fragment } from 'react';
import BuilderElement from './BuilderElement'
import {connect} from 'react-redux'
import {selectElement} from '../../actions/selectActions'
import _ from 'lodash';

class Builder extends Component {
  onSelected = (id)=> {
    this.props.selectElement(id)
  } 
  render() {
    const {elements} = this.props;
    const sortedElements = _.sortBy(elements, ['element', 'sort'])
    console.log(elements[0].id)
    return (
      <Fragment>
        {sortedElements.map( (e,index) => (
          <div onClick={() => this.onSelected(e.id)}>
          <BuilderElement key={index} element={e} />
          </div>
        ))}
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  elements: state.elements,
  selected: state.select.select
})

export default connect(mapStateToProps,{selectElement})(Builder);
