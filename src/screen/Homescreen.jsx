import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Modal, 
  ScrollView, 
  FlatList 
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Productcart from '../components/Productcart';

const Homescreen = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Search query state

  const category = [
    'Trending Now', 
    'Best Sellers', 
    'New Arrivals', 
    'Men', 
    'Women', 
    'Kids', 
    'Home & Living', 
    'Electronics', 
    'Beauty & Health', 
    'Sports & Fitness', 
    'Books & Stationery', 
    'Toys & Games', 
    'Grocery & Essentials'
  ];

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      {/* Hamburger Menu */}
      <TouchableOpacity style={styles.hamburger} onPress={toggleCategories}>
        <Icon name="bars" size={30} color="#E91E63" />
      </TouchableOpacity>

      {/* Header Section */}
      <Header />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>E-Shop</Text>
      </View>

      {/* 🔍 Search Bar (Only One) */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search for products..." 
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} // Update searchQuery state
        />
      </View>

      {/* Horizontal Category List */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={category}
          keyExtractor={(item, index) => index.toString()} 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({ item }) => {
            const isSelected = selectedCategory === item;
            return (
              <TouchableOpacity 
                style={[
                  styles.categoryItemContainer, 
                  isSelected ? styles.selectedCategoryItem : styles.unselectedCategoryItem
                ]}
                onPress={() => setSelectedCategory(item)}
              >
                <Text 
                  style={[
                    styles.categoryItemText, 
                    isSelected ? styles.selectedCategoryText : styles.unselectedCategoryText
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Modal for Categories */}
      <Modal
        visible={showCategories}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleCategories}
      >
        <TouchableOpacity style={styles.modalBackdrop} onPress={toggleCategories}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Categories</Text>
            <ScrollView>
              {category.map((cat, index) => (
                <Text key={index} style={styles.modalCategoryItem}>{cat}</Text>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* 🛒 Product List (Pass searchQuery & selectedCategory) */}
      <Productcart selectedCategory={selectedCategory} searchQuery={searchQuery} />
    </LinearGradient>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  hamburger: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  categoryContainer: {
    height: 40,  
    marginTop: 10,
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  categoryItemContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 8,
    borderRadius: 20,
    elevation: 2,
  },
  categoryItemText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedCategoryItem: {
    backgroundColor: "#E91E63",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  unselectedCategoryItem: {
    backgroundColor: "#fff",
  },
  unselectedCategoryText: {
    color: "#000",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalCategoryItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});  