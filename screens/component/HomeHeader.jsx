import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../helper/constants'
import { ActivityIndicator } from 'react-native'
import { Platform, StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 


const HomeHeader = () => {
  const {isLoading, setReload, SiteTitle, setGoBack, setGoForward} = useContext(AppContext)
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={{color: "black", fontWeight: 800, color: 'white'}}> {SiteTitle} </Text>
          <View style={{flexDirection: 'row', justifyContent: 'evenly', alignItems: 'center'}}>
            <AntDesign onPress={() =>setGoBack(true)} name="left" size={24} color="white" />
            <AntDesign onPress={() =>setGoForward(true)} name="right" size={24} color="white" />
          {isLoading ? <ActivityIndicator></ActivityIndicator>: <AntDesign onPress={() => setReload(true)} name="reload1" size={24} color="white" /> }
          </View>
        </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 20,
        // For Android
        elevation: 1,
        // For iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height: 100,
  },
  innerContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#1a237e", 
    height: '100%'
  }
})