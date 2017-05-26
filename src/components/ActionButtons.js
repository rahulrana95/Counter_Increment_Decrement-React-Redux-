import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators}from 'redux';
import {IncValue} from   '../actions/IncValue.js';
import {DecValue} from   '../actions/DecValue.js';
import  '../index.css';

class ActionButtons extends Component {
  render() {

  		console.log('prop data is '+ JSON.stringify(this.props));			
    return (
      <div className="ActionButtons">
      		 				
      <button  onClick={this.props.IncValue.bind(this)}>+ INC</button>
      <button  onClick={this.props.DecValue.bind(this)}>- DEC</button>
      </div>
    );
  }
}



function mapStateToProps(state){

	console.log('State to Prop called');
	return {
		newValue:state.newValue
	};

		
	}

function matchDispatchToProps(dispatch){

		console.log('Inc Dispatcher Called');
	return bindActionCreators({IncValue,DecValue},dispatch);


}	

export default connect(mapStateToProps,matchDispatchToProps)(ActionButtons);