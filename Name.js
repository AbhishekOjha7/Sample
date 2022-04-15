import { Text } from 'react-native'
import React from 'react'

const Name=(props)=>{
    const{name}=props
    console.log("name is re render");

    return(
        <Text>{name}</Text>
    )
}
export default React.memo(Name)