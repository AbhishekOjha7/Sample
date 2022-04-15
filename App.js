import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
// import Child from './Child'
import react from 'react'
import Name from './Name'
import Age from './Age'
import Dept from './Dept'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      array:[5,6,8,9],
      student:{
        Name:"Abhishek ojha",
        Age:21,
        Dept:'Reactnative'
      }
    }
    console.log("constuctor call")
    this.onTextName=()=>{
      this.setState(
        {
          student:{...this.state.student,Name: 'John'}
        }
        )
        }
    this.onTextAge=()=>{
      this.setState(
        {
          student:{...this.state.student,Age:"22"}
        }
      )
    }
    this.onTextDept=()=>{
      this.setState(
        {
          student:{...this.state.student,Dept:"IOS"}
        }
      )
    }
  
  }

  componentDidMount(){
    console.log("component did mount call")
  }
  componentDidUpdate(){
    console.log("component did update call")

  }
  componentWillMount(){
    console.log("component willmout call")
  }
  componentWillUnmount(){
    console.log("component willunmout call")
  }

  render() {
    console.log("render call")
    return (
      <SafeAreaView style={{flex:1,justifyContent:'center'}}>
      <View style={{backgroundColor:'white'}}>
        <Text style={{backgroundColor:'yellow',fontSize:40,justifyContent:'center',textAlign:'center'}}>Student Details</Text>
       <Text style={{color:'blue',fontSize:40}} 
       onPress={this.onTextName} >
         Name:
       </Text>
       <Name name={this.state.student.Name}/>
       
        {/* <Text style={{color:'white',fontSize:40}} onPress={()=>this.onTextPress()} >{this.state.number}</Text> */}
        <Text style={{color:'blue',fontSize:40,marginBottom:50,marginTop:50}} 
       onPress={this.onTextAge} >
         Age:
       </Text>
       <Age age={this.state.student.Age}/>

       <Text style={{color:'blue',fontSize:40,marginBottom:100,marginTop:100}} 
       onPress={this.onTextDept} >
         Dept:
       <Dept dept={this.state.student.Dept}/></Text>

       
      </View>
      </SafeAreaView>
    )
  }
}