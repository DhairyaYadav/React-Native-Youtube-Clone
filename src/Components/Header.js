import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants';
import { useNavigation, useTheme } from '@react-navigation/native';

const Header = () => {
     const myColor = 'colors.iconColor';

     const Navigation = useNavigation();

     const {colors} = useTheme();
    return (
        <View style={{...styles.headerStyle, backgroundColor: 'white',}}>
            <View style={styles.logoStyle}>
                <Entypo name="youtube" size={32} color="red" />
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 5, color: myColor }}>YouTube</Text>
            </View>
            <View style={styles.iconStyle}>
                <MaterialIcons name="video-camera-front" size={32} color={myColor} />
                <MaterialIcons name="search" size={32} color={myColor} onPress={() => Navigation.navigate('Search')} />
                <MaterialIcons name="account-circle" size={32} color={myColor} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        flexDirection: 'row',
        justifyContent:'space-between',
        height: 45,
       
        elevation:4,
        // marginTop:Constant.statusBarHeight,
    },
    logoStyle: {
        flexDirection: 'row',
        margin: 5
    },
    iconStyle: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width:150,
        margin:5
    }
})

export default Header
