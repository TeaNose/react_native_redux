import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity, Modal} from 'react-native';

import loadImage from '../utils/CommonUtil';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doSomething} from '../actions/UserTransactionAction';

const mapStateToProps = (state) => {
	var {userPayload} = state.userTransaction
	return{
		user: userPayload,
		userList: state.userList
	}
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({doSomething: doSomething}, dispatch)
}

class Detail extends Component{
	constructor(){
		super();
		this.state = {
			detail: {},
			modalVisible: false,
			key: '',
      id: '',
      name: '',
      spmoves: '',
      style: '',
      userList: []
		}
	}

	componentDidMount(){
		let params = this.props.navigation.state.params.data
		this.setState({detail: params})
		this.setState({key: params.key})
		this.setState({id: params.id})
		this.setState({name: params.name})
		this.setState({spmoves: params.spmoves})
		this.setState({style: params.style})
		this.setState({userList: this.props.userList});
	}

	componentWillReceiveProps(nextProps){
		this.setState({detail: nextProps.user})
		this.setState({userList: nextProps.userList})
	}

	goToEditPage(){
		this.props.navigation.navigate('Edit', {data:this.state.detail})
	}

	setModalVisible(visible){
		this.setState({modalVisible: visible})
	}

	removeUser(){
		this.setModalVisible(!this.state.modalVisible)
		this.props.doSomething('REMOVE_USER', this.state)
		this.props.navigation.navigate('Home')
	}

	showRemovePopUp(){
		return(
				<Modal
	          animationType="fade"
	          transparent={true}
	          visible={this.state.modalVisible}
						onRequestClose={() => {}}
	          >
	        <View style={DetailStyle.container}>
						<View style={DetailStyle.popUp}>
							<Text>Are you sure you want to remove this data?</Text>
							<View style={DetailStyle.row}>
								<View style={DetailStyle.button1}>
									<Button title="Yes" onPress={() => {this.removeUser()}}/>
								</View>
								<View style={DetailStyle.button2}>
									<Button title="Cancel" onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>
								</View>
							</View>
						</View>
	        </View>
	      </Modal>
		)
	}

	render(){
		return(
			<View style={DetailStyle.container}>
				<View style={DetailStyle.row}>
						<Image source={loadImage(this.state.detail)} style={DetailStyle.image}/>
				</View>
				<View style={DetailStyle.row}>
					<View style={DetailStyle.text}>
						<Text>Name</Text>
					</View>
					<View style={DetailStyle.text2}>
						<Text>{this.state.detail.name}</Text>
					</View>
				</View>

				<View style={DetailStyle.row}>
					<View style={DetailStyle.text}>
						<Text>Special Moves</Text>
					</View>
					<View style={DetailStyle.text2}>
						<Text>{this.state.detail.spmoves}</Text>
					</View>
				</View>

				<View style={DetailStyle.row}>
					<View style={DetailStyle.text}>
						<Text>Style</Text>
					</View>
					<View style={DetailStyle.text2}>
						<Text>{this.state.detail.style}</Text>
					</View>
				</View>

				<View style={DetailStyle.row}>
						<View style={DetailStyle.button1}>
								<TouchableOpacity onPress={() => {this.goToEditPage()}}>
									<Image source={require('ThirdProject/apps/assets/images/edit_icon.png')} style={DetailStyle.imageIcon}/>
								</TouchableOpacity>
						</View>
						<View style={DetailStyle.button2}>
								<TouchableOpacity onPress={() => {this.setModalVisible(true)}}>
									<Image source={require('ThirdProject/apps/assets/images/remove_icon.png')} style={DetailStyle.imageIcon}/>
								</TouchableOpacity>
						</View>
				</View>
				{this.showRemovePopUp()}
			</View>
		)
	}
}

const DetailStyle = StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	row:{
		flexDirection: 'row'
	},
	text:{
		paddingLeft: 80,
		flex: 2
	},
	text2:{
		flex: 3
	},
	button1:{
		width: 120,
		alignItems: 'center'
	},
	button2:{
		width: 100,
		alignItems: 'center'
	},
	image:{
		borderRadius: 100,
		height: 150,
		width: 150
	},
	imageIcon:{
		height: 25,
		width: 25
	},
	popUp:{
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(255, 255, 255)',
		height: 100,
		width: 300
	}
})

export default connect(mapStateToProps, matchDispatchToProps)(Detail);
