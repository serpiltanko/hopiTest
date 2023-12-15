import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useTranslation } from "react-i18next";

const Filter = () => {
    const { t } = useTranslation();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{t("filter.text1")}</Text>
            <TouchableOpacity style={styles.filterContainer}>
                <Text style={styles.text}>{t("filter.text2")}</Text>
                <Feather name="list" size={24} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Filter

const styles = StyleSheet.create({

    container: {
        height: 50,
        flexDirection: "row",
        backgroundColor: "rgb(255,255,255)",      
        justifyContent:"space-between",
        paddingHorizontal:16,
        alignItems:"center",

    },

    text: {
        color: "black",
        fontSize: 15,
    },

    filterContainer: {
   
        flexDirection: "row",
        backgroundColor: "rgb(255,255,255)",
     gap:10,


    }


})