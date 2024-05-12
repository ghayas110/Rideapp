import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigation from './StackNavigation';
import HomeScreen from '../screens/Home/HomeScreen';
import Favourite from '../screens/Favourite/Favourite';
import WalletScreen from '../screens/Wallet/WalletScreen';
import Profile from '../screens/Profile/Profile';
import OfferScreen from '../screens/Offer/OfferScreen';
const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    const screenOptions = {
      tabBarShowLabel:false,
      headerShown:false,
      tabBarStyle: {
            position: "absolute",
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            elevation: 0,
      backgroundColor:'white',
        height: 60,
        alignSelf : "center",
        flexDirection  :  "row"
      },
      tabStyle: {
        width: "auto",
      },
      tabBarItemStyle: {
        width: "auto",
        height: 60,
      },
      tabBarContentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
   
    }
  return (
    <Tab.Navigator screenOptions={screenOptions}>
     <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image source={!focused ? require('../images/home.png') : require('../images/home1.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
          
            </View>
            ),
          }}/>
          <Tab.Screen name="Favourite" component={Favourite} options={{
    
          tabBarIcon: ({ color, size,focused }) => (
            <View style={{alignItems: "center", justifyContent: "center"}}>
                  <Image source={!focused ? require('../images/location.png') : require('../images/location1.png')} style={{ width: 25, height: 25 ,objectFit:'contain' }} />
          
            </View>
            ),
          }}/>
          <Tab.Screen name="Wallet" component={WalletScreen} options={{
            tabBarIcon: ({ color, size,focused }) => (
              <View
              style={{
                position: "absolute",
                bottom:10,
               alignItems: "center",
               justifyContent: "center",
               backgroundColor: "#01DBB6",
               width: Platform.OS == "ios" ? 80 :80,
               height: Platform.OS == "ios" ? 80 :80,
          
               borderRadius: Platform.OS == "ios" ? 50 : 50
              }}
             >
             <Image source={!focused ? require('../images/card.png') : require('../images/card1.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
             </View>
              ),
            }}/>
            <Tab.Screen name="Offer" component={OfferScreen} options={{
              tabBarIcon: ({ color, size,focused }) => (
                
                  <Image source={!focused ? require('../images/card.png') : require('../images/card1.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
                ),
              }}/>
              <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size,focused }) => (
                  
                  <Image source={!focused ? require('../images/profile.png') : require('../images/profile1.png')} style={{ width: 25, height: 20 ,objectFit:'contain' }} />
                  ),
                }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})