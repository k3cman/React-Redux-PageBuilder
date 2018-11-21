import React, { Component } from 'react'
import Element from '../builder/Element';
import {connect} from 'react-redux';
import {selectElement} from '../../actions/moveActions';

class Container extends Component {
  render() {
    const {children} = this.props.data;
    return (
      <div className="container" onClick={() => this.props.selectElement(this.props.data.col)} id={this.props.data.col} style={{paddingBottom:'10px'}}>
        {children.map(child => {
          return(
            <Element type={child.type} col={child.col} data={child.text} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {selectElement})(Container);
