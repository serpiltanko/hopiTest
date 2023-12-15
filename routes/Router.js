import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import HomeScreen from "../src/screens/HomeScreen";
import LoginScreen from "../src/screens/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { NavigationContainer } from "@react-navigation/native";
import MyTabNavigator from "./MyTabNavigator";
import WelcomeScreen from "../src/screens/WelcomeScreen";
import PasswordScreen from "../src/screens/PasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();

const Router = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Yükleniyor...</Text>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="MyTabNavigator"
          component={MyTabNavigator}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        {currentUser ?
          (<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />)
          :
          (<Stack.Screen name="PasswordS" component={PasswordScreen} options={{ headerShown: false }} />)}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Router;

const styles = StyleSheet.create({});
