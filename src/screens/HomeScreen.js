import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoHeader from "../components/LogoHeader";
import Cards from "../components/Cards";
import ShoppingCards from "../components/ShoppingCards";
import { useTranslation } from "react-i18next";


const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader />
      <ScrollView>
        <Cards />
        <Text style={styles.text}>{t("home.text")}</Text>
        <ShoppingCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    paddingTop: 20,
    paddingLeft: 20,

    backgroundColor: "rgb(255,255,255)",
    fontWeight: "500",
  },
});
