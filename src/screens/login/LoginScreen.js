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
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { getBaseUrl } from "../../mocks/util";


const LoginScreen = () => {
  const [email, setEmail] = useState("serpiltanko@gmail.com");


  useEffect(() => {
    fetch(`${getBaseUrl()}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
 
  const navigation = useNavigation();  
  const openWelcomeScreen = () => {
    // @ts-ignore
    navigation.navigate('Welcome');
  };

  const openPasswordScreen = () => {
    // @ts-ignore
    navigation.navigate('Password', {email});
  }

  

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={openWelcomeScreen}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>E-Posta Adresi</Text>
        <Text style={styles.text}>E-Posta adresini girerek başlayabilirsin</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          textContentType="emailAddress"
          value={email}
          // @ts-ignore
          onChangeText={(text) => setEmail(text)}
        />  
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={openPasswordScreen}>
            <Text></Text>
            <Text style={styles.buttonText}>DEVAM</Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    paddingTop:20,
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
