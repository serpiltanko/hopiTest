import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const QRScan = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <AntDesign name="camera" size={24} color="white" />
                <TextInput style={styles.text} placeholder={t('QRScanPlaceholder')}/>
                <AntDesign name="arrowup" size={24} color="white" />
            </View>
        </View>
    )
}

export default QRScan

const styles = StyleSheet.create({

    container: {
        backgroundColor: "rgb(255,255,255)",
        paddingHorizontal: 20,
        paddingTop: 100,
      
    },

    inputContainer: {
        flexDirection: "row",
        backgroundColor: "rgb(225,40,142)",
        alignItems: "center",
        justifyContent: "space-between",
        width: 350,
        height: 70,
        borderRadius: 12,
        padding: 25,

    },

    text: {
        paddingLeft: 15,     
        fontSize: 18,
        fontWeight: "500",
    },

})