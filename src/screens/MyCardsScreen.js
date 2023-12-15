import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoHeader from '../components/LogoHeader'

const MyCardsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader/>
    </SafeAreaView>
  )
}

export default MyCardsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})