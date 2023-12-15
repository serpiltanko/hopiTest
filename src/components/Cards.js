import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const CARD_WIDTH = 360;
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const flatlistRef = React.useRef(null);
  const timer = React.useRef(null);


  useEffect(() => {
    startAnimation();
    return () => {

      clearInterval(timer.current);
    };
  }, []);


  useEffect(() => {
    clearInterval(timer.current);
    startAnimation();

  }, [activeDotIndex]);

  const goToNextPage = () => {

    if (activeDotIndex < 3) {
      flatlistRef.current.scrollToIndex({
        index: activeDotIndex + 1,
        animated: true,
      });
  
    } else {
      flatlistRef.current.scrollToIndex({
        index: 0,
        animated: true,
      });
    }
  };

  const startAnimation = () => {
    timer.current = setInterval(() => goToNextPage(), 5000);
  };

  const cards = [
    { id: 1, image: require("../assets/homescreen/carousel1.png") },
    { id: 2, image: require("../assets/homescreen/carousel2.png") },
    { id: 3, image: require("../assets/homescreen/carousel3.png") },
    { id: 4, image: require("../assets/homescreen/carousel1.png") },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistRef}
  
        data={cards}

        renderItem={({ item }) => <Card item={item} />}

        keyExtractor={(item) => item.id.toString()}
 
        horizontal={true}
    
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      
        contentContainerStyle={styles.listContainer}
    
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToOffsets={cards.map((_, i) => i * CARD_WIDTH)}
   
        decelerationRate={"fast"}
 
        onScroll={(e) => {
          const newIndex = Math.round(
            e.nativeEvent.contentOffset.x / CARD_WIDTH
          );
          setActiveDotIndex(newIndex);
        }}
      />

    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    padding:15,
  },
  listContainer:{
    gap:10,
    padding:25,
  },
});
