import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

const Orders = () => {
  const { orders } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📦 Your Orders</Text>
      {orders.length === 0 ? (
        <Text style={styles.empty}>No orders placed yet!</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Text style={styles.itemText}>{item.name} x {item.quantity}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFFBFC" },
  header: { fontSize: 22, fontWeight: "bold", color: "#E91E63", marginBottom: 10 },
  empty: { fontSize: 16, color: "#666", textAlign: "center" },
  orderItem: { padding: 10, backgroundColor: "#FFF", marginVertical: 5, borderRadius: 5 },
  itemText: { fontSize: 16, color: "#333" },
});
