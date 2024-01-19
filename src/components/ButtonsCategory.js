import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const CustomButton = ({ title, onPress, isActive }) => {
  const buttonStyle = isActive ? styles.activeButton : styles.inactiveButton;
  const textStyle = isActive ? styles.activeButtonText : styles.inactiveButtonText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const ButtonsCategory = ({ onTabPress, selectedTab }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        title='Kategoriler'
        onPress={() => onTabPress('Kategoriler')}
        isActive={selectedTab === 'Kategoriler'}
      />
      <CustomButton
        title='Markalar'
        onPress={() => onTabPress('Markalar')}
        isActive={selectedTab === 'Markalar'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  activeButton: {
    backgroundColor: "rgb(255,102,196)",
    width: 170,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveButton: {
    backgroundColor: "white",
    width: 170,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500"
  },
  activeButtonText: {
    color: "white",
    fontSize: 14,
    textTransform: "capitalize",
  },
  inactiveButtonText: {
    color: "black",
    fontSize: 14,
    textTransform: "capitalize",
  }
});

export default ButtonsCategory;
