import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from "react-i18next";


const LogoQR = () => {
  const { t } = useTranslation();
  return (

    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/homescreen/Logo.png")} />
      <Image style={styles.qrCode} source={require('../assets/QRCode/Qr-Code.png')} />
      <View style={styles.number}>
        <Text style={styles.text}>1693 7070 70 </Text>
        <TouchableOpacity>
          <Ionicons name="copy-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View >
        <Text style={styles.description}>{t("LogoQR.text")} </Text>
      </View>
    </View>

  )
}

export default LogoQR

const styles = StyleSheet.create({

  container: {

    backgroundColor: "rgb(255,255,255)",
    alignItems: "center",
    justifyContent: "center",


  },

  logo: {
    width: 120,
    height: 60,
    marginBottom: 35,
    marginTop: 10,
  },

  qrCode: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },

  text: {

    fontSize: 40,
    fontWeight: "800",
  },

  number: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,

  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    textAlign:"center",
    paddingHorizontal:40,

  },


})