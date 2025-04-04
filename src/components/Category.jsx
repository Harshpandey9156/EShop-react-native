import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View>
      <Text style={styles.CategoryTest}>Trending </Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    CategoryTest:{
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: "#E96E6E",
        height: 30,
        width: 100,
        borderRadius: 10,
        textAlign: "center",
        
    }
})