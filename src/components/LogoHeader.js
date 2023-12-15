import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const LogoHeader = () => {

const navigation = useNavigation();

const openQRCodeScreen = () => {
    // @ts-ignore
    navigation.navigate('QRCode');
};

const openCartScreen = ()=>{
    // @ts-ignore
    navigation.navigate('Cart');
};

const openProfileScreen = ()=>{
    // @ts-ignore
    navigation.navigate('Profile');
};

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.account}  onPress={openProfileScreen}>
                <Octicons name="person" size={20} color="black" />
            </TouchableOpacity>
            <Image style={styles.logo} source={require("../assets/homescreen/Logo.png")} />
            <View style={styles.leftContainer}>
                <TouchableOpacity style={styles.cart}  onPress={openCartScreen}>
                    <FontAwesome5 name="shopping-cart" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.qrCode} onPress={openQRCodeScreen}>
                    <Ionicons name="qr-code" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogoHeader

const styles = StyleSheet.create({

    container: {
        width: "auto",
        height: 70,
        padding: 10,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    
    },

    account: {
        borderColor: "rgb(250,250,250)",
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgb(250,250,250)",
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        width: 120,
        height: 60,

    },

    leftContainer: {
        flexDirection: "row",
        gap: 25,
    },

    cart: {
        alignItems: "center",
        justifyContent: "center",
    },

    qrCode: {
        alignItems: "center",
        justifyContent: "center",
    },

})