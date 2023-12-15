import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const Brand = ({ item }) => {
  const [isVisible, setIsVisible] = useState(true);

  const navigation = useNavigation();

  const openMapScreen = () => {
    // @ts-ignore
    navigation.navigate("Map");}

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={openMapScreen}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    padding: 15,
  },

  imageContainer: {
    backgroundColor: "rgb(255,255,255)",
    elevation: 5,
    shadowColor: "black",
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    resizeMode: "contain",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});
