import { ScrollView, StyleSheet, Text, TextInput, View,FlatList, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MiniCard from "../Components/MiniCard";
import Constant from 'expo-constants';
import { useSelector,useDispatch } from "react-redux";
import { add } from "../Reducer/Reducer";


// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyA2SQ0SPgleAIQ1nlVA2Jd94i1045ARP2I
const Search = ({navigation}) => {
  const [textValue, setTextValue] = useState("");
//   const [miniCardData, setMiniCardData] = useState([]);
  const [loading, setLoading] = useState(false);

  //redux
  const miniCardData = useSelector(state => state.yourSliceName);
  const Dispatch = useDispatch();

  const fetchData = async () => {
    try {
        setLoading(true);
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${textValue}&type=video&key=AIzaSyA2SQ0SPgleAIQ1nlVA2Jd94i1045ARP2I`);
      const data = await response.json();
      console.log(data);
      Dispatch(add(data.items));
    //   setMiniCardData(data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
      <View style = {styles.searchContainer}>
        <MaterialIcons name="keyboard-backspace" size={32} color="black" onPress={() => navigation.goBack()}/>
        <TextInput
          value={textValue}
          onChangeText={(text) => setTextValue(text)}
          style = {styles.inputBox}
        />
        <MaterialCommunityIcons name="send-outline" size={32} color="black" onPress={() => fetchData()}/>
      </View>
      {/* <ScrollView>
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      </ScrollView> */}
      {loading ? <ActivityIndicator size='large' color='red' /> :null}
      <FlatList
      data={miniCardData}
      renderItem={({item}) => {
        return <MiniCard 
        videoId = {item.id.videoId}
        title = {item.snippet.title}
        channel = {item.snippet.channelTitle}
        /> 
      }}
      keyExtractor={item => item.id.videoId}
      />
    </View>

  );
};

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:5,
        elevation:4,
        shadowOffset:{
            width:10,
            height:10
        }
    },
    inputBox:{
        width:'70%',
        backgroundColor:'#e6e6e6'
    }
});

export default Search;
