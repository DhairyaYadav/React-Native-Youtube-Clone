import { StatusBar } from 'expo-status-bar';
import { Animated, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Constant from 'expo-constants';
import { useSelector } from 'react-redux';

export default function Home() {
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY,0,60) //45 header ki height
    const translateY = diffClamp.interpolate({
      inputRange:[0,45],
      outputRange:[0,-45]
    })

    const cardData = useSelector(state => state.yourSliceName);
  return (
    <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
      <Animated.View
      style = {{transform:[
        {translateY:translateY}
      ],
    elevation:4,
    zIndex:100
    }}
      >
      <Header />
      </Animated.View>
      <FlatList
      data={cardData}
      renderItem={({item}) => (
        <Card
        videoId = {item.id.videoId}
        title = {item.snippet.title}
        channel = {item.snippet.channelTitle}
        />
      )}
      keyExtractor={item => item.id.videoId}
      onScroll={(e) => (
        scrollY.setValue(e.nativeEvent.contentOffset.y)
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
