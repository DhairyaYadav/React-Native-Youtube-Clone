import { View, Text } from 'react-native'
import React from 'react'

const ExploreCard = ({name}) => {
  return (
    <View style={{
        backgroundColor:"red",
        height:50,
        width:180,
        borderRadius:4,
        marginTop:10
    }}>
        <Text style={{
            textAlign:"center",
            color:"white",
            fontSize:22,
            marginTop:5
        }}>{name}</Text>
    </View>
  )
}

export default ExploreCard