import { ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoHeader from '../components/LogoHeader'
import ButtonsCategory from '../components/ButtonsCategory'
import Categories from '../components/Categories'
import Brands from '../components/Brands'
import { useTranslation } from "react-i18next";

const CategoryScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Kategoriler");
  const { t } = useTranslation();
  const renderContent = () => {
    if (selectedTab === 'Kategoriler') {
      return <ScrollView><Categories /></ScrollView>;
    } else if (selectedTab === 'Markalar') {
      return <ScrollView><Brands /></ScrollView>;
    }
  };

  const handleTabPress = (tabTitle) => {
    setSelectedTab(tabTitle);
    console.log(`${tabTitle} sekmesine geçildi`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader />
      <ButtonsCategory 
        onTabPress={handleTabPress} 
        selectedTab={selectedTab} 
      />
      {renderContent()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default CategoryScreen
