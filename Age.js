import { View, Text } from 'react-native'
import React from 'react'

const Age=(props)=>{
    const{age}=props
    console.log("age is re ender");

    return(
        <Text>{age}</Text>
    )
}

export default React.memo(Age)