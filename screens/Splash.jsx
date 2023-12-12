import React, { useContext, useEffect } from 'react';
import { Image, View } from 'react-native';
import { AppContext } from '../helper/constants';
import Logo from "../assets/image/logo.jpg";
import { ActivityIndicator } from 'react-native';

function Splash({ navigation }) {
  const { sethasloadedSplash } = useContext(AppContext);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      sethasloadedSplash(true);
      navigation.navigate('After'); 
    }, 5000);

    return () => clearTimeout(splashTimer);
  }, [navigation, sethasloadedSplash]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Image source={Logo} style={{height: 200, width: 200}} />
      <View style={{ position: 'absolute', bottom: 20 }}>
        <ActivityIndicator size={"large"}></ActivityIndicator>
      </View>
    </View>
  );
}

export default Splash;
