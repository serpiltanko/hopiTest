import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import useLocation from "../hooks/useLocation";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import useCompass from "../hooks/useCompass";
import MapTopArea from "../components/MapTopArea";

const MapScreen = () => {
  const location = useLocation();
  const data = useCompass();
  console.log(data);
  const initialRegion = location
    ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }
    : null;

  const coordinate = initialRegion
    ? {
        latitude: initialRegion.latitude,
        longitude: initialRegion.longitude,
      }
    : null;

  return (
    <View style={styles.container}>
      <MapTopArea/>
          <MapView style={styles.map} initialRegion={initialRegion}>
        {coordinate && (
          <Marker
            coordinate={coordinate}
            title="İstanbul"
            description="İstanbul"
          >
            <Image
              source={require("../assets/pin.png")}
              style={{
                width: 50,
                height: 50,
                transform: [{ rotate: `${((data.y + 45) * 180) / 90}deg` }],
              }}
            />
          </Marker>
        )}
      </MapView>
      <View style={styles.buttomContainer}>
        <View style={styles.brandContainer}>
          <Text style={styles.header}>Vialand AVM </Text>
        </View>
        <View style={styles.brandSeparator}></View>
        <View style={styles.addressContainer}>
          <FontAwesome name="map-marker" size={18} color="white" />
          <Text style={styles.text}>
            Yeşilpınar Mah. Şehit Metin Kaya Sok. No:11-116 34065 Eyüp/İstanbul
          </Text>
        </View>
        <View style={styles.phoneContainer}>
          <Feather name="phone" size={18} color="white" />
          <Text style={styles.text}>02128030640</Text>
        </View>
        <View style={styles.clockContainer}>
          <FontAwesome name="clock-o" size={18} color="white" />
          <Text style={styles.text}>10:00 - 22:00</Text>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {},
  map: {
    width: "100%",
    height: "67%",
  },
  buttomContainer: {
    padding: 16,
    backgroundColor: "#21BEF3",
    gap: 10,
  },
  header: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    color: "white",
    fontSize: 12,
    textAlign: "justify",
  },

  brandContainer: {
    flexDirection: "row",
    gap: 10,
  },

  brandSeparator: {
    borderBottomWidth: 0.4,
    borderBottomColor: "white",
    marginBottom: 5,
  },

  addressContainer: {
    flexDirection: "row",
    gap: 12,
  },
  phoneContainer: {
    flexDirection: "row",
    gap: 10,
  },
  clockContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
