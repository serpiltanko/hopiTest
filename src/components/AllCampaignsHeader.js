import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { useTranslation } from "react-i18next";

const AllCampaignsHeader = () => {

    const navigation = useNavigation();
    const { t } = useTranslation();
    const openHomeScreen = () => {
 // @ts-ignore
        navigation.navigate('Home')
    }



    return (
        <SafeAreaView>
            <View style={styles.container}>

                <TouchableOpacity onPress={openHomeScreen}>
                    <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.text}>{t("AllCampaignsHeader.text")}</Text>
            </View>
        </SafeAreaView>
    )
}

export default AllCampaignsHeader

const styles = StyleSheet.create({
    container: {
        height: 50,       
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
        paddingLeft:70,

    }


})