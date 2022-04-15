import { Text, View,SafeAreaView, Alert } from 'react-native'
import React, { Component } from 'react'
import Child from './Child'

export default class Practise extends Component {
  constructor(props){
    super(props)
       this.state={
         array:[2,4,56,8],

         object:{
           Name:"abhishek",
           roll:67464,
         }   
      }
  }
       
  myCallback=(id)=>{
    console.log("user click from child component")
    Alert.alert("user click"+ JSON.stringify(id) )
  } 
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
          <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text style={{fontSize:40}}>practice</Text>

          <Child style={{fontSize:30}} myCallback={this.myCallback} heading={'Array'} 
                arr={this.state.array}  object={"OBJECT"} ob={this.state.object} 
          />
          </View>
   
      </SafeAreaView>
    )
  }
}
