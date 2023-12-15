import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const MapTopArea = () => {
  const navigation = useNavigation();

  const returnCategoriesScreen = () => {
    // @ts-ignore
    navigation.navigate("Kategoriler");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={returnCategoriesScreen}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>ALTINYILDIZ CLASSICS</Text>
      </View>
    </SafeAreaView>
  );
};

export default MapTopArea;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "rgb(255,255,255)",
    paddingHorizontal: 16,
    alignItems: "center",
  },

  text: {
    color: "black",
    fontWeight: "500",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 70,
  },
});
