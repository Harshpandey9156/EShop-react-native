import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "./src/screen/Homescreen";
import Cart from "./src/components/Cart";
import { CartProvider } from "./src/context/CartContext";
import Entypo from "react-native-vector-icons/Entypo";
import Orders from "./src/components/order";
import Wishlist from "./src/components/Wishlist";
import Profile from "./src/components/Profiles";

// 🛍 Orders Screen
const OrdersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>📦 Your Orders</Text>
      <Text style={styles.subText}>No orders placed yet!</Text>
    </View>
  );
};

//  Wishlist Screen
const WishlistScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}> Your Wishlist</Text>
      <Text style={styles.subText}>Your wishlist is empty!</Text>
    </View>
  );
};

// 👤 Profile Screen
const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>👤 Your Profile</Text>
      <Text style={styles.subText}>Manage your account details here.</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#fff",
              borderTopWidth: 0,
            },
          }}
        >
          {/*  Home */}
          <Tab.Screen
            name="Home"
            component={Homescreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={size} color={color} />
              ),
            }}
          />

          {/* 🛍 Orders */}
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="shopping-bag" size={size} color={color} />
              ),
            }}
          />

          {/*  Wishlist */}
          <Tab.Screen
            name="Wishlist"
            component={Wishlist}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="heart" size={size} color={color} />
              ),
            }}
          />

          {/* 🛒 Cart */}
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="shopping-cart" size={size} color={color} />
              ),
            }}
          />

          {/* 👤 Profile */}
          <Tab.Screen
            name="Account"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="user" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFBFC",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E91E63",
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
});
