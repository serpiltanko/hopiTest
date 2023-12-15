import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

const ProfileHeader = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const closeProfileScreen = () => {
    // @ts-ignore
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Feather name="bell" size={28} color="black" />
        <Text style={styles.text}>{t("profileHeader.text")}</Text>
        <TouchableOpacity onPress={closeProfileScreen}>
          <Feather name="x" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "space-between",
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
  },
});
