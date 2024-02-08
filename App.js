import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import Search from './src/Screens/Search';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import VideoPlayer from './src/Screens/VideoPlayer';
import Explore from './src/Screens/Explore';
import Subscribe from './src/Screens/Subscribe';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from './src/Reducer/Reducer';

const customDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'#404040',
    iconColor:'white'
  }
}
const customDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:'white',
    iconColor:'black'
  }
}

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Store = configureStore({  reducer: {
  yourSliceName: sliceReducer,
}, });

const RootHome = () => (
  <Tab.Navigator theme={customDarkTheme}>
    <Tab.Screen name='Home' component={Home} options={{ 
      headerShown: false,
     tabBarIcon: () => (
      <MaterialIcons name="home" size={24} color="black" />
    ), }}  />
    <Tab.Screen name='Explore' component={Explore} options={{ 
      headerShown: false,
      tabBarIcon: () => (
        <MaterialIcons name="explore" size={24} color="black" />
      )
      }}  />
    <Tab.Screen name='Subscribe' component={Subscribe} options={{ 
      headerShown: false,
      tabBarIcon: () => (
        <MaterialIcons name="unsubscribe" size={24} color="black" />
      ) }}  />
  </Tab.Navigator>
)

export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='rootHome' component={RootHome} options={{ headerShown: false }}  />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }}  />
        <Stack.Screen name='VideoPlayer' component={VideoPlayer} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}