import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const CartBottomSide = () => {
  const { t } = useTranslation();
  const data = [
    { id: "1", name: "Summer Hit Plaj Çantası", price: "229" },
    { id: "2", name: "Summer Hit Plaj Çantası", price: "229" },
    { id: "3", name: "Summer Hit Plaj Çantası", price: "229" },
    { id: "4", name: "Summer Hit Plaj Çantası", price: "229" },
    { id: "5", name: "Summer Hit Plaj Çantası", price: "229" },
    { id: "6", name: "Summer Hit Plaj Çantası", price: "229" },
    { id: "7", name: "Summer Hit Plaj Çantası", price: "229" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.imgContainer}>
      <Image
        source={require(// @ts-ignore
        "../assets/cart/product1.png")}
        style={styles.img}
      />
      <Text style={styles.imgText}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity>
          <View style={styles.addingIcon}>
            <Feather name="plus" size={15} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("CartBottomSide.text")}</Text>
      <ScrollView horizontal>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};

export default CartBottomSide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    paddingHorizontal: 16,
  },

  text: {
    paddingTop: 40,
    fontWeight: "500",
    fontSize: 17,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },

  img: {
    width: 125,
    height: 130,
  },

  imgContainer: {
    backgroundColor: "rgb(255,255,255)",
    width: 160,
    height: 220,
    borderRadius: 10,
    paddingTop: 5,
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    // @ts-ignore
    alignItems: "center",
    justifyContent: "space-between",
  },

  imgText: {
    fontSize: 11,
    paddingTop: 5,
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
  },

  listContainer: {
    flex: 1,
  },

  addingIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgb(255, 150, 190)",
    justifyContent: "center",
    alignItems: "center",
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    gap: 30,
  },
});
