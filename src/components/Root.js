import React, { Component } from 'react';
import ActionButtons from './ActionButtons.js';
import IncDecResult from '../containers/IncDecResult.js';
import  '../index.css';
class Root extends Component {
  render() {
    return (
      <div className="Root">
       <h1>Counter </h1> 
       <ActionButtons/>
       <IncDecResult/>				

      </div>
    );
  }
}

export default Root;
