import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'

const QrCodeHeader = ({title}) => {

    const navigation = useNavigation();

    const closeQRCodeScreen = ()=>{
         // @ts-ignore
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <TouchableOpacity onPress={closeQRCodeScreen}>
                    <Feather name="x" size={26} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default QrCodeHeader

const styles = StyleSheet.create({

    container: {
        height: 50,
        justifyContent: "space-between",
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

    }

})