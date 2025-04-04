import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const Wishlist = ({ wishlist = [], removeFromWishlist, moveToCart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Wishlist</Text>
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Your wishlist is empty!</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.wishlistItem}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => moveToCart(item)}>
                <Entypo name="shopping-cart" size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeFromWishlist(item.id)}>
                <Entypo name="cross" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  wishlistItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "#E91E63",
    fontWeight: "bold",
  },
});
