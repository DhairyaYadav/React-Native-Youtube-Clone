import { StyleSheet, Text, View,ScrollView ,FlatList} from 'react-native'
import React from 'react'
import Constant from 'expo-constants';
import Header from '../Components/Header';
import ExploreCard from '../Components/ExploreCard';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';

const Explore = () => {

  const cardData = useSelector(state => state.yourSliceName);
  return (
    <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
    <Header />
    <ScrollView >
    <View style={{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around"
    }}>
         <ExploreCard name="Gaming"/>
         <ExploreCard name="Trending"/>
         <ExploreCard name="Music" />
         <ExploreCard name="News" />
         <ExploreCard name="Movies"/>
         <ExploreCard name="Fashion"/> 
    </View>
    <Text style={{
        margin:8,
        fontSize:22,
        borderBottomWidth:1
      }}>Trending Videos</Text>
     <FlatList 
         data={cardData}
         renderItem={({item})=>{
             return <Card
             videoId={item.id.videoId}
             title={item.snippet.title}
             channel={item.snippet.channelTitle}
             
             />
            }}
            
            keyExtractor={item=>item.id.videoId}
            />
            </ScrollView>
    
</View>
  )
}

const styles = StyleSheet.create({})

export default Explore;