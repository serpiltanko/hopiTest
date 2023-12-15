import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import React, { useContext, useState } from "react";
import { auth } from "../../services/firebase";
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import HomeScreen from "./HomeScreen";


const PasswordScreen = () => {

  const [password, setPassword] = useState("123456");
  const route = useRoute();
    // @ts-ignore
  const email = route.params?.email 
  const {currentUser} = auth;


  
  const navigateToHome = async () => {
    try {
      let signInMethods = await fetchSignInMethodsForEmail(auth, email);
  
      if (signInMethods.length > 0) {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("HomeRoutes");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("HomeRoutes");
      }
    } catch (error) {
      console.error("Bir hata oluştu: ", error);
    }
  };
  
 

  const navigation = useNavigation();
  const openLoginScreen = () => {
    // @ts-ignore
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={openLoginScreen}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Parolanız</Text>
        <Text style={styles.text}>Parolanızı girerek Hopi dünyasına adım atabilirsiniz</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          // @ts-ignore
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={navigateToHome}>         
            <Text style={styles.buttonText}>DEVAM</Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 50,
    fontSize: 25,
    fontWeight: "500",
  },
  text: {
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: "400",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(220,220,220)",
    paddingHorizontal: 16,
    paddingTop: 20,
    fontSize: 18,
  },

  button: {
    padding: 16,
    flexDirection: "row",
    backgroundColor: "rgb(225,40,142)",
    alignItems: "center",
    justifyContent: "space-between",
    width: 320,
    height: 70,
    borderRadius: 12,

  },

  buttonContainer: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 380,
    color: "white",

  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },

});
