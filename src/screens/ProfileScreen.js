import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/ProfileHeader'

const ProfileScreen = () => {
  return (

    <SafeAreaView style={styles.container}>
      <ProfileHeader />


    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({


  container: {
    flex: 1,
  },

})