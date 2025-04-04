import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <View>
      <View>
        <Image source={require("../assets/dp.webp")}  style={styles.appIcon}/>
      </View>
      {/* <Text>Header</Text> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  appIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop:-10,
    marginLeft: 10,
    right: 20,
    position: "absolute",
    zIndex: 10,
  }
})