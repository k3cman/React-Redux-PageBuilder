import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {Wrapper} from './elements/gridElements'

import Move from './common/Move';
import Builder from './builder/Builder';

class App extends Component {
    render() {
        return (
            <Fragment>

            
            <Wrapper>
            <Builder />
            </Wrapper>
            <Move />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
	elements: state.elements
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps)(App);