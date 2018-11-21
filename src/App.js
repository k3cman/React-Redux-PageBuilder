import React, { Component } from 'react';
import Toolbar from './components/common/Toolbar';
import Wrapper from './components/common/Wrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Wrapper />
      </div>
    );
  }
}

export default App;
