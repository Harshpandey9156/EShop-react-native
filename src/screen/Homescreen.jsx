import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import Product from '../components/Productcart';
import Cart from '../components/Cart';

const Homescreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // ✅ Add product to cart (increase quantity if already exists)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Move item to wishlist and remove from cart
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    setCart(cart.filter(item => item.id !== product.id));
  };

  // ✅ Move cart items to orders (clear cart)
  const moveToOrders = () => {
    alert('Order placed successfully!');
    setCart([]);
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />
      <Text style={styles.headerTitle}>E-Shop</Text>

      {/* 🔍 Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search for products..." 
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* 🛒 Product List */}
      <Product 
        selectedCategory={selectedCategory} 
        searchQuery={searchQuery} 
        addToCart={addToCart} 
      />

      {/* 🛍 Open Cart Button */}
      <TouchableOpacity style={styles.cartButton} onPress={() => setIsCartVisible(true)}>
        <Text style={styles.cartButtonText}>🛒 View Cart ({cart.length})</Text>
      </TouchableOpacity>

      {/* 🛍 Cart Modal */}
      <Modal visible={isCartVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Cart 
            cart={cart} 
            setCart={setCart} 
            addToWishlist={addToWishlist} 
            moveToOrders={moveToOrders}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setIsCartVisible(false)}>
            <Text style={styles.closeButtonText}>Close Cart</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E91E63',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 20,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  cartButton: {
    backgroundColor: '#E91E63',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  closeButton: {
    backgroundColor: '#E91E63',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
