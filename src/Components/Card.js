import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Card = ({title,videoId,channel}) => {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity  onPress = {() => (
            Navigation.navigate('VideoPlayer',{videoId:videoId,title:title,channel:channel})
            )}>
        <View style={{ marginBottom: 10 }}>
            
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }}
                    style={styles.imageStyle}
                />
            
            <View style={styles.videoDetails}>
                <MaterialIcons name="account-circle" size={40} color='#212121' />
                <View style={styles.videoTitle}>
                    <Text style={styles.titleText}
                        ellipsizeMode='tail'
                        numberOfLines={2}
                    >{title}</Text>
                    <Text>{channel}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 200,
    },
    videoDetails: {
        flexDirection: 'row',
        margin: 5,
    },
    videoTitle: {
        marginLeft: 10,
        width: '80%'
    },
    titleText: {
        fontSize: 20,
        // width:Dimensions.get('screen').width - 50
    }
});
export default Card