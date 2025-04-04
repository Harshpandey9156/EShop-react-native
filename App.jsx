import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './src/screen/Homescreen';
import Entypo from "react-native-vector-icons/Entypo";
import Cart from './src/components/cart';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="shopping-bag" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="heart" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="shopping-cart" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="user" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
