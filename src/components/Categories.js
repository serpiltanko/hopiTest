import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


const Categories = () => {
    return (

        <View style={styles.container}>
         
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Erkek.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Anne-Çocuk.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Kozmetik.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Ayakkabı-Çanta.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Saat-Aksesuar.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Spor-Outdoor.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Ev-Yaşam.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Elektronik.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Gıda.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Sanat.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Hediye.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/OtoYapı.png')} />
                </TouchableOpacity>  
                 <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Tasarım.png')} />
                </TouchableOpacity>  
                 <TouchableOpacity>
                    <Image style={styles.img} source={require('../assets/categories/Seyahat.png')} />
                </TouchableOpacity>
           
        </View>

    )
}

export default Categories

const styles = StyleSheet.create({
    container: {            
        backgroundColor: "rgb(255,255,255)",
        paddingHorizontal: 15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        flexWrap:"wrap",
        gap:15,
        paddingVertical:15,
    },

    img: {
        width: 155,
        height: 100,
        borderRadius: 8,
 
    }

})