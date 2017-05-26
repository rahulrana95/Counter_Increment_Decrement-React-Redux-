import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators}from 'redux';
import {IncValue} from   '../actions/IncValue.js';
import {DecValue} from   '../actions/DecValue.js';
import  '../index.css';

class IncDecResult extends Component {
  

  render() {
    	

    		

    return (
      <div className="IncDecResult">
       <p>{this.props.newValue}</p>
       			

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
	return bindActionCreators({},dispatch);


}	

export default connect(mapStateToProps,matchDispatchToProps)(IncDecResult);




