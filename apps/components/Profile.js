import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Profile extends Component{
	static navigationOptions = {
		title: 'Profile'
	}

	render(){
		return(
			<View>
				<Text>This is Profile</Text>
			</View>
		)
	}
}

const ProfileStyle = StyleSheet.create({

})
