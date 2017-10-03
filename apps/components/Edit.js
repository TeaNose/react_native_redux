import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text, Image, Button} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doSomething} from '../actions/UserTransactionAction';

import loadImage from '../utils/CommonUtil';

function mapStateToProps(state){
  return {
    userList: state.userList
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({doSomething: doSomething}, dispatch)
}

class Edit extends Component{
  constructor(){
    super()
    this.state = {
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
    this.setState({key: params.key})
    this.setState({id: params.id})
    this.setState({name: params.name})
    this.setState({spmoves: params.spmoves})
    this.setState({style: params.style})
    this.setState({userList: this.props.userList})
  }

  componentWillReceiveProps(nextProps){
    
  }

  editData(){
    this.props.doSomething('EDIT_USER', this.state)
  }

  render(){
    return(
      <View style={EditStyle.container}>
          <View style={EditStyle.row}>
              <Image source={loadImage(this.state)} style={EditStyle.image}/>
          </View>

          <View style={EditStyle.row}>
              <View style={EditStyle.text}>
                  <Text>Name</Text>
              </View>
              <View style={EditStyle.text2}>
                  <TextInput
                      value = {this.state.name}
                      onChangeText= {(text) => this.setState({name: text})}
                  />
              </View>
          </View>

          <View style={EditStyle.row}>
              <View style={EditStyle.text}>
                  <Text>Special Moves</Text>
              </View>
              <View style={EditStyle.text2}>
                  <TextInput
                      value = {this.state.spmoves}
                      onChangeText= {(text) => this.setState({spmoves: text})}
                  />
              </View>
          </View>

          <View style={EditStyle.row}>
              <View style={EditStyle.text}>
                  <Text>Style</Text>
              </View>
              <View style={EditStyle.text2}>
                  <TextInput
                      value = {this.state.style}
                      onChangeText= {(text) => this.setState({style: text})}
                  />
              </View>
          </View>

          <View style={EditStyle.row}>
              <Button title="Edit" onPress={() => this.editData()}/>
          </View>
      </View>
    )
  }
}

const EditStyle = StyleSheet.create({
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
    justifyContent: 'center',
    flex: 1
  },
  text2:{
    width: 200,
    flex: 2
  },
  image:{
    borderRadius: 20,
    height: 150,
    width: 150
  }
})

export default connect (mapStateToProps, matchDispatchToProps)(Edit);
