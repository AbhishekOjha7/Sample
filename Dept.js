import { View, Text } from 'react-native'
import React from 'react'

const Dept=(props)=>{
    const{dept}=props
    console.log("dept is re endering");

  return (
    <View>
      <Text>{dept}</Text>
    </View>
  )
}
export default React.memo(Dept);