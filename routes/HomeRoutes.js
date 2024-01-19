import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../src/screens/home/HomeScreen';
import QRCodeScreen from '../src/screens/QRCodeScreen';
import CartScreen from '../src/screens/CartScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import AllCampaigns from '../src/screens/AllCampaigns';
import LoginScreen from '../src/screens/login/LoginScreen';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import PasswordScreen from '../src/screens/PasswordScreen';
import MapScreen from '../src/screens/MapScreen';



const Stack = createNativeStackNavigator();


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator> 
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
    <Stack.Screen name="QRCode" component={QRCodeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="AllCampaigns" component={AllCampaigns} options={{ headerShown: false }}/>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})