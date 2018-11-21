import React, { Component } from 'react';
import {connect} from 'react-redux'

import Builder from './builder/Builder';

class App extends Component {
    render() {
        return (
            <Builder />
        );
    }
}

const mapStateToProps = state => ({
	elements: state.elements
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps)(App);