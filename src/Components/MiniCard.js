import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MiniCard = ({Navigation},props) => {
  
  return (
    <TouchableOpacity  onPress = {() => (
      Navigation.navigate('VideoPlayer',{videoId:props.videoId,title:props.title,channel:props.channel})
      )} 
    >
    <View style={{flexDirection:'row',margin:10,marginBottom:0}}>
      <Image
        source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`
          }}
          
        style={styles.imageStyle}
      />
       <View style={styles.videoDetails}>
                <View style={styles.videoTitle}>
                    <Text style={styles.titleText}
                        ellipsizeMode='tail'
                        numberOfLines={3}
                    >{props.title}</Text>
                    <Text>{props.channel}</Text>
                </View>
            </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: "45%",
    height: 100,
  },
  videoDetails: {
    flexDirection: 'row',
    margin: 5,
},
videoTitle: {
    marginLeft: 10,
    // width: '80%'
},
titleText: {
    fontSize: 17,
    width:Dimensions.get('screen').width/2
}
});

export default MiniCard;
