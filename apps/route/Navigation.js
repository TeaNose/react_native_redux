import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Home from '../components/Home';
import Profile from '../components/Profile';
import Detail from '../components/Detail';
import Edit from '../components/Edit';

export const HomeScreenStack = StackNavigator({
	HomeStack:{
		screen: Home
	},
	Detail:{
		screen: Detail,
		navigationOptions: {
			tabBarVisible: false
		}
	},
	Edit:{
		screen: Edit,
		navigationOptions: {
			tabBarVisible: false
		}
	}
})

export const HomeScreenTab = TabNavigator({
	Home:{
		screen: HomeScreenStack
	},
	Profile:{
		screen: Profile
	}
},{
	tabBarPosition: 'bottom'
}
)
