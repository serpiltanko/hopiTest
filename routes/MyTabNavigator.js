import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingScreen from '../src/screens/ShoppingScreen';
import MyCardsScreen from '../src/screens/MyCardsScreen';
import CategoryScreen from '../src/screens/CategoryScreen';
import HomeStackNavigator from './HomeRoutes';
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";


const Tab = createBottomTabNavigator();

const MyTabNavigator = () => {
  const { t } = useTranslation();
  return (

    <Tab.Navigator

      screenOptions={({ route, navigation }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Kampanyalar") {
            iconName = focused ? "home" : "home";
          }
          else if (route.name === "Kategoriler") {
            iconName = focused ? "appstore-o" : "appstore-o";
          }
          else if (route.name === "Alışveriş") {
            iconName = focused ? "shoppingcart" : "shoppingcart";
          }
          else if (route.name === "Cüzdanım") {
            iconName = focused ? "wallet" : "wallet";
          }

          const currentColor = focused ? "dodgerblue" : "black";
          return (
            // @ts-ignore
            <AntDesign name={iconName} size={size} color={currentColor}/>
          );
        },
      })}
    >
  
      <Tab.Screen name="Kampanyalar" component={HomeStackNavigator} options={{ headerShown: false, tabBarLabel: t('Campaigns') }} />
      <Tab.Screen name="Kategoriler" component={CategoryScreen} options={{ headerShown: false, tabBarLabel: t('Categories') }} />
      <Tab.Screen name="Alışveriş" component={ShoppingScreen} options={{ headerShown: false, tabBarLabel: t('Shopping') }} />
      <Tab.Screen name="Cüzdanım" component={MyCardsScreen} options={{ headerShown: false, tabBarLabel: t('MyCart') }}/>
    </Tab.Navigator>

  );
};


export default MyTabNavigator;

const styles = StyleSheet.create({



})