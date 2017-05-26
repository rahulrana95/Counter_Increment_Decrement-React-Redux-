import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import  {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';



function counterValue(state=0,action){

	console.log('counterValue Reducer Running..');

	if(action.type=='Inc'){

		return state+1;
	}
	else if(action.type=='Dec')
	{
		return state-1;
	}


	return state;



}





let rootReducers=combineReducers({
	newValue:counterValue

});

let store=createStore(rootReducers);

store.subscribe(()=>{

	console.log('reducer fired');

})


//store.dispatch({type:'Inc'});

ReactDOM.render(
				<Provider store={store}>	
				<Root />
				</Provider>,
			 	document.getElementById('root')
				
				);
