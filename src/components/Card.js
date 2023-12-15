import { Image, StyleSheet, View } from "react-native";
import { useState } from "react";

const Card = ({ item }) => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <View style={styles.container}>
            <Image source={item.image} style={{ width: 360, height: 180, borderRadius: 10, }} />
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(255,255,255)",
        elevation: 5,
        shadowColor: "black",
        borderRadius: 10,
        shadowOpacity: 0.5, // Gölge opaklığı
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 }, 
       
    },
});
