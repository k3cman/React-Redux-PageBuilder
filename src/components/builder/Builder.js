import React, { Component } from 'react';
import {connect} from 'react-redux';
import BuildElements from './BuildElements';
import { Wrapper} from '../elements/gridElements'

class Builder extends Component {
    renderElements = () => {
        this.props.elements.map((e,index) => {
            return (
                <BuildElements element={e} key={index} />
            )
        })
    }
    render() {
        const {elements} = this.props;
    return (
        <Wrapper>
   
        {this.props.elements.map((e,index) => {
            return (
                <BuildElements element={e} key={index} />
            )
        })}
     
        </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
    elements: state.elements
})

export default connect(mapStateToProps,{})(Builder);
