import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import BarHeader from '../components/BarHeader'
import CartTopSide from '../components/CartTopSide'
import CartBottomSide from '../components/CartBottomSide'
import { useTranslation } from "react-i18next";


const CartScreen = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <BarHeader title={t('CartScreen.text')} />
      <CartTopSide/>
      <CartBottomSide/>
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

})