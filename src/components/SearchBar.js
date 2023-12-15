import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";


const SearchBar = ({placeholder}) => {
  return (
    <View style={styles.container}>

    <View style={styles.inputContainer}>
      <AntDesign
       // @ts-ignore
        style={styles.icon}
        name="search1"
        size={20}
        color="rgb(37,38,42)"
      />
      <TextInput style={styles.text} placeholder="Marka, kampanya ve ürün ara" />
    </View>
  </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingBottom:30,       
        paddingTop:15,
        alignItems: "center",
        backgroundColor: "rgb(255,255,255)",
      },

      inputContainer: {
        flex: 1,
        flexDirection: "row",
        borderColor: "rgb(244,244,246)",
        borderWidth: 1,
        borderRadius: 12,
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 8,
        gap: 8,
        backgroundColor: "rgb(246,247,251)",
      },

      text:{
        paddingLeft:15,
        color:"rgb(179,180,784)"
      }


})