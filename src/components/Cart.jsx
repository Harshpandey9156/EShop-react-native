import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const Cart = ({ cart = [], setCart, addToWishlist, moveToOrders }) => {
  const increaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
  };

  const moveToWishlist = (item) => {
    addToWishlist(item);
    setCart(cart.filter(cartItem => cartItem.id !== item.id)); // Remove from cart
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty!</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>₹{item.price}</Text>

                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                    <Entypo name="minus" size={20} color="#E91E63" />
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                    <Entypo name="plus" size={20} color="#E91E63" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity onPress={() => moveToWishlist(item)}>
                <Entypo name="heart" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {cart.length > 0 && (
        <TouchableOpacity style={styles.orderButton} onPress={moveToOrders}>
          <Text style={styles.orderButtonText}>📦 Place Order</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: { padding: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  emptyText: { fontSize: 16, textAlign: "center", marginTop: 20 },
  cartItem: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 10, marginVertical: 5, borderRadius: 8, elevation: 2 },
  image: { width: 50, height: 50, resizeMode: "contain", marginRight: 10 },
  info: { flex: 1 },
  name: { fontSize: 14, fontWeight: "bold" },
  price: { fontSize: 16, color: "#E91E63", fontWeight: "bold" },
  quantityContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  quantity: { marginHorizontal: 10, fontSize: 16, fontWeight: "bold" },
  orderButton: { backgroundColor: "#E91E63", padding: 10, borderRadius: 8, alignItems: "center", marginTop: 20 },
  orderButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});

export default Cart;