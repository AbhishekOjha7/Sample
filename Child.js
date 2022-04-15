// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'
// import react from 'react'

// const  Child=(props)=>{
//     const {number}=props
//     console.log("child re-render")
//   return (
//     // <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',marginTop:300}}>
//       <Text style={styles.new}>{JSON.stringify(number)}</Text>
//     // </View>
//   )
// }
// const styles = StyleSheet.create({
//     new:{
//         color:'#000',
//         fontSize:40,
//     }
// })
// export default React.memo(Child)

import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log('incoing props', props);
  }

  onClickButton=()=>{
        this.props.myCallback(this.props.arr)
  }

  onClickButton1=()=>{
    this.props.myCallback(this.props.ob)
  }

  render() {
    const {heading,myCallback,object} = this.props;
    return (
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
        onPress={this.onClickButton}
          style={{
            backgroundColor: 'red',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
          }}>
          <View>
            <Text>{heading}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.onClickButton1}
          style={{
            backgroundColor: 'red',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
          }}>
          <View>
            <Text>{object}</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}
