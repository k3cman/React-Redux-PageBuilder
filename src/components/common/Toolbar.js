import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addTextItem} from '../../actions/textActons';
import {moveElUp} from '../../actions/selectActions';

class Toolbar extends Component {
  state ={
    text:"",
    shown:false
  }
   onClickHandler = () => {
    const item = {
      id:'p-1',
      type:'p',
      sort:5,
      options:{
          text:this.state.text
      }
  }
    this.props.addTextItem(item)
  }
  onTextChange = (e) => {
    this.setState({text:e.target.value})
  }
  render() {
    
  console.log(this.props)
    return (
      <div className="toolbar">
      <div className="toolbar-row">
        <ul>
            <li onClick={this.onClickHandler}>ADD TEXT ITEM</li>
            <li>BTN</li>
            <li>BTN</li>
            <li>BTN</li>
            <li>BTN</li>
            <li>BTN</li>
        </ul>
        <ul className="move">
          <li onClick={() => this.props.moveElUp(this.props.select)}>UP</li>
          <li>DWN</li>
        </ul>
        </div>
        <textarea onChange={this.onTextChange} name="text" value={this.state.text} />
      </div>
    )
  }
}



const mapStateToProps = state => ({
  elements: state.elements,
  select: state.select.select
})




export default connect(mapStateToProps, {addTextItem,moveElUp})(Toolbar);