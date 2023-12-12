import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppContext } from '../helper/constants';
import Logo from "../assets/image/logo.jpg";
import { Image } from 'react-native';

export default function After({navigation}) {
  const { sethasloadedSplash } = useContext(AppContext);

  useEffect(() => {
    const afterTimer = setTimeout(() => {
      sethasloadedSplash(true);
    }, 5000);

    return () => clearTimeout(afterTimer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Image source={Logo} style={{height: 200, width: 200}} />
      <Text style={{ fontSize: 30, fontWeight: '900' }}>WELCOME TO OOU PORTAL</Text>
      <TouchableOpacity onPress={() => navigation.navigate("WebScreen")}>
        <View style={{paddingHorizontal: 64, backgroundColor: 'lightblue', paddingVertical: 16, marginTop: 25}}>
          <Text style={{fontSize: 24, fontWeight: '900', borderRadius: 5 }}>Go to Portal</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
