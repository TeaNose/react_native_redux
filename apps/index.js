import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {HomeScreenTab} from './route/Navigation';
import allReducers from '../apps/reducers/MainReducer';

const store = createStore(allReducers);

export default class index extends Component{
	render(){
		return(
			<Provider store={store}>
				<HomeScreenTab/>
			</Provider>
		)
	}
}
