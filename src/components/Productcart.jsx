    import React, { useState, useEffect } from 'react';
    import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    StyleSheet, 
    ActivityIndicator, 
    Image 
    } from 'react-native';
    import Icon from 'react-native-vector-icons/FontAwesome';

    const Product = ({ selectedCategory, searchQuery, addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    // Fetch Products from Fake Store API
    const fetchProducts = async () => {
        try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
        setLoading(false);
        } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
        }
    };

    // Filter by Search Query
    useEffect(() => {
        let filtered = products;
        if (searchQuery) {
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        }
        if (selectedCategory) {
        filtered = filtered.filter(
            product => product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
        }
        setFilteredProducts(filtered);
    }, [searchQuery, selectedCategory, products]);

    return (
        <View style={styles.container}>
        {loading ? (
            <ActivityIndicator size="large" color="#E91E63" />
        ) : (
            <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.productItem}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>₹{item.price}</Text>
                <TouchableOpacity 
                    style={styles.addToCartButton} 
                    onPress={() => addToCart(item)}
                >
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
                </TouchableOpacity>
            )}
            />
        )}
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    productItem: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        elevation: 3,
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    productPrice: {
        fontSize: 16,
        color: '#E91E63',
        fontWeight: 'bold',
        marginTop: 5,
    },
    addToCartButton: {
        marginTop: 10,
        backgroundColor: '#E91E63',
        padding: 8,
        borderRadius: 5,
    },
    addToCartText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    });

    export default Product;
