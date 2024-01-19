import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTranslation } from "react-i18next";

const CartTopSide = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container} >
            <Image source={require('../assets/cart/myCart.png')} style={styles.img} />
            <Text style={styles.text} >{t("CartTopSide.text")}</Text>
            <Text style={styles.description} > {t("CartTopSide.description")}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{t("CartTopSide.ButtonText")}</Text>
            </TouchableOpacity>
  

        </View>
    )
}

export default CartTopSide

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgb(255,255,255)",
        paddingBottom: 30,
        padding:10,
    },


    img: {

        width: 80,
        height: 80,

    },

    text: {
        paddingVertical: 30,
        fontWeight: "500",
        fontSize: 18,
    },

    description: {
        textAlign: "center",
        justifyContent: "center",
        paddingHorizontal: 40,
    },

    button: {
        marginTop: 30,
        flexDirection: "row",
        backgroundColor: "rgb(255, 150, 190)",
        alignItems: "center",
        justifyContent: "center",
        width: 320,
        height: 70,
        borderRadius: 12,      
    },

    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "600",
    },

 

})