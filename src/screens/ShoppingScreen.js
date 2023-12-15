import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoHeader from '../components/LogoHeader'

const ShoppingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader/>
    </SafeAreaView>
  )
}

export default ShoppingScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})