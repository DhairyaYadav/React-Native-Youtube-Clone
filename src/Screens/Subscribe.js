import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constant from 'expo-constants';
import Header from '../Components/Header';

const Subscribe = () => {
  return (
    <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
        <Header />
      <Text>Subscribe</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default Subscribe;
