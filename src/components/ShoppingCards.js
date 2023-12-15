import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
// @ts-ignore
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const ShoppingCards = () => {

    const navigation = useNavigation();
    const { t } = useTranslation();
    const openAllCampaignScreen =()=>{
 // @ts-ignore
        navigation.navigate('AllCampaigns');
    }
  

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/1-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text1")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/2-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text2")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/3-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text3")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/4-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text4")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bannerContainer}>
                <Image style={styles.imgBanner} source={require(
// @ts-ignore
                "../assets/homescreen/banner.png")} />

            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/1-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text5")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/2-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text6")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/3-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text7")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/4-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text8")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/1-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text9")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/2-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text10")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.bannerContainer}>
                <Image style={styles.imgBanner} source={require(
// @ts-ignore
                "../assets/homescreen/banner.png")} />

            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/1-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text11")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.img} source={require(
// @ts-ignore
                "../assets/homescreen/2-campaign.png")} />
                <Text style={styles.text}>{t("shoppingCards.text12")}</Text>
                <Text style={styles.description}>{t("shoppingCards.description")}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}  onPress={openAllCampaignScreen} >
                <Text style={styles.buttonText}>{t("shoppingCards.ButtonText")}</Text>
                <Icon name="chevron-right" size={12} color="black" style={styles.icon}/>
            </TouchableOpacity>

        </View>
    )
}

export default ShoppingCards

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 20,
        backgroundColor: "rgb(255,255,255)",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingVertical: 20,

    },

    img: {
        width: 160,
        height: 180,
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    imgContainer: {
        width: 160,
        height: 250,
        borderRadius: 10,
        backgroundColor: "rgb(255,255,255)",
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },

    },
    text: {
        fontWeight: "500",
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },

    description: {
        fontWeight: "500",
        paddingHorizontal: 10,
        paddingBottom: 5,
        color: "rgb(58,178,75)"
    },
    bannerContainer: {
        width: 360,
        height: 100,
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        flexDirection: "row",

    },
    imgBanner: {
        width: 320,
        height: 75,

    },

    button: {
        width:170,
        marginTop:20,
        marginBottom:40,
        backgroundColor: "rgb(246,247,251)",
        paddingHorizontal: 20,
        paddingVertical:10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor:"rgb(246,247,251)",
            elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        // @ts-ignore
        flexDirection: "row",
      },
      buttonText: {
        color: 'black',
        fontSize:13,
        fontWeight:"400",
      },
      icon: {
        marginLeft: 10,
      },

})