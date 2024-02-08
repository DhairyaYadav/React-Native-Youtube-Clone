import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constant from 'expo-constants';
import { WebView } from 'react-native-webview';

const VideoPlayer = ({route}) => {
  const  {videoId,title,channel} = route.params;
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View style={styles.playerStyle}>
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
      <View style={styles.videoTitle}>
        <Text style={styles.titleText}
          ellipsizeMode='tail'
          numberOfLines={2}
        >{title}</Text>
        <Text>{channel}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  playerStyle: {
    width: '100%',
    height: 200
  },
  videoTitle: {
    marginLeft: 10,
    width: '80%',
    borderBottomWidth:1
  },
  titleText: {
    fontSize: 20,
    // width:Dimensions.get('screen').width - 50
  }
})
export default VideoPlayer
