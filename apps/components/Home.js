import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

function mapStateToProps(state){
 var {userListPayload} = state.userTransaction
 return{
	 userList: state.userList,
   updatedUserList: userListPayload
 }
}

class Home extends Component{
	constructor(){
		super()
		this.state = {
			data:[]
		}
	}

	static navigationOptions = {
		tabBarLabel: 'Home',
		title: 'Home'
	}

	componentDidMount(){
		this.setState({data: this.props.userList});
	}

  componentWillReceiveProps(nextProps){
    this.setState({data: nextProps.updatedUserList});
  }

	goToDetailScreen(item){
		this.props.navigation.navigate('Detail', {data:item})
	}

	renderRowItem(item){
		return(
			<TouchableOpacity onPress={() => {this.goToDetailScreen(item)}}>
				<Text>{item.name}</Text>
			</TouchableOpacity>
		)
	}

	render(){
		return(
			<FlatList
				data = {this.state.data}
				renderItem={({item}) => this.renderRowItem(item)}
			/>
		)
	}
}

const Styles = StyleSheet.create({
	blue:{
		backgroundColor: 'blue'
	}
})

export default connect(mapStateToProps)(Home);
