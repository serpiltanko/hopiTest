import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


const Categories = () => {

    const categoryData = [
       
        {image: require('../assets/categories/Kadın.jpg'), label:"KADIN" },
        {image: require('../assets/categories/Erkek.jpg'), label:"ERKEK" },
        {image: require('../assets/categories/Anne-Çocuk.jpg'), label:"ANNE & ÇOCUK" },
        {image: require('../assets/categories/Kozmetik.jpg'), label:"KOZMETİK" },
        {image: require('../assets/categories/Ayakkabı-Çanta.jpg'), label:"AYAKKABI & ÇANTA" },
        {image: require('../assets/categories/Saat-Aksesuar.jpg'), label:"SAAT & AKSESUAR" },
        {image: require('../assets/categories/Spor-Outdoor.jpg'), label:"SPOR & OUTDOOR" },
        {image: require('../assets/categories/Ev-Yaşam.jpg'), label:"EV & YAŞAM" },
        {image: require('../assets/categories/Elektronik.jpg'), label:"ELEKTRONİK" },
        {image: require('../assets/categories/Gıda.jpg'), label:"GIDA" },
        {image: require('../assets/categories/Sanat.jpg'), label:"SANAT" },
        {image: require('../assets/categories/Hediye.jpg'), label:"HEDİYE ÖNERİLERİ" },
        {image: require('../assets/categories/OtoYapı.jpg'), label:"OTO, YAPI & MARKET" },
        {image: require('../assets/categories/Tasarım.jpg'), label:"TASARIM" },
        {image: require('../assets/categories/Seyahat.jpg'), label:"SEYAHAT" },

    ]

    return (

        <ScrollView contentContainerStyle={styles.container}>
        {categoryData.map((category, index) => (
          <TouchableOpacity key={index}>
            <Image style={styles.img} source={category.image} />
            <Text style={styles.label}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  
  export default Categories;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgb(255,255,255)",
      paddingHorizontal: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 15,
      paddingVertical: 15,
    },
    img: {
      width: 155,
      height: 100,
      borderRadius: 8,
    },
    label: {
      textAlign: 'center',
      marginTop: 8,
    },
  });