import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Brand from "./Brand";
import SearchBar from "./SearchBar";



// @ts-ignore
const Brands = () => {
  const brandImg = [
    // @ts-ignore
    { id: 1, image: require("../assets/homescreen/carousel1.png") },
    // @ts-ignore
    { id: 2, image: require("../assets/homescreen/carousel2.png") },
    // @ts-ignore
    { id: 3, image: require("../assets/homescreen/carousel3.png") },
    // @ts-ignore
    { id: 4, image: require("../assets/homescreen/carousel4.png") },
    // @ts-ignore
    { id: 1, image: require("../assets/homescreen/carousel1.png") },
    // @ts-ignore
    { id: 2, image: require("../assets/homescreen/carousel2.png") },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Arama Yap" />
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>Markalar</Text>
        <Text style={styles.textCount}>6 Marka</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          data={brandImg}
          renderItem={({ item }) => <Brand item={item} />}
        />
      </View>

    </SafeAreaView>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  textContent: {
    fontSize: 18,
    fontWeight: "600",
  },
  textCount: {
    fontSize: 18,
    color: "#292929",
  },
  listContainer: {    
    height:500,
    padding: 16,
  },
});
