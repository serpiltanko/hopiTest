import { StyleSheet } from 'react-native'
import React from 'react'
import BarHeader from '../components/BarHeader'
import LogoQR from '../components/LogoQR'
import { SafeAreaView } from 'react-native-safe-area-context'
import QRScan from '../components/QRScan'
import { useTranslation } from "react-i18next";


const QRCodeScreen = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <BarHeader title= {t('QRCodeScreen.text')}/>
      <LogoQR />
      <QRScan />
    </SafeAreaView>
  );
}



export default QRCodeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
  }
})