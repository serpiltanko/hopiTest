import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const openLoginScreen = ()=> {
        // @ts-ignore
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView>
           
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.header}>  Hoşgeldin</Text>
                    <Text style={styles.text}> Ne zaman istersen, Hopi'nin renkli ve kazançlı dünyasına dönebilirsin. </Text>
                </View>
                <Image
                    source={require('../assets/login/welcomeimage.png')}
                    style={styles.image}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={openLoginScreen}>
                        <Text style={styles.buttonText}>GİRİŞ YAP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textContainer: {

        width: "100%",
        height: 190,
        backgroundColor: "rgb(240,204,216)",
        lineHeight: 24,
    },

    header: {
        fontSize: 30,
        fontWeight: "800",
        color: "rgb(224,40,142)",
        textAlign: "center",
        paddingHorizontal: 20,
        paddingTop: 90,
    },

    text: {
        textAlign: "center",
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontWeight: "700",
        lineHeight: 24,
    },


    image: {
        width: "100%",
        height: 400,
        resizeMode: "cover",
    },


    buttonContainer:{   
        width:"100%",
        height:150,
        flexDirection: "row",
        backgroundColor: "rgb(240,204,216)",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom:50,
    },

    button: {   
        flexDirection: "row",
        backgroundColor: "rgb(225,40,142)",
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

});

export default WelcomeScreen;

