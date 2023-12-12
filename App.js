import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import Splash from './screens/Splash';
import After from  './screens/After'
import WebViewScreen from './screens/WebViewScreen';
import { AppContext } from './helper/constants';
import HomeHeader from './screens/component/HomeHeader';
import Home from './screens/Home';


const Stack = createStackNavigator()

const MainProvider = ({children}) => {
  const [isLoading, setisloading] = useState(true)
  const [hasLoadedSplash, sethasloadedSplash] = useState(false)
  const [reload, setReload] = useState(false)
  const [SiteTitle, setSiteTitle] = useState('please wait..')
  const [goBack, setGoBack] = useState(false)
  const [goForward, setGoForward] = useState(false)

  return <AppContext.Provider value={{goForward, setGoForward, goBack, setGoBack, SiteTitle, setSiteTitle, reload, setReload, isLoading, setisloading, hasLoadedSplash, sethasloadedSplash}}>
    {children}
  </AppContext.Provider>
}

const SplashStack = () => {
  return <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        </Stack.Navigator>
}
const HomeStack = () => {
  return  <Stack.Navigator initialRouteName='WebScreen'>
              <Stack.Screen name='WebScreen' component={WebViewScreen} options={{ header: () => <HomeHeader />  }} />
              <Stack.Screen name='Home' component={Home} options={{ headerShown: false  }} />
              <Stack.Screen name='After' component={After} options={{ headerShown: false }} />
          </Stack.Navigator>
}
const RootStack = () => {
  const {hasLoadedSplash, isLoading} = useContext(AppContext)
  
  return <NavigationContainer>
    {hasLoadedSplash ?  <HomeStack /> : <SplashStack />}
  </NavigationContainer>
}

export default function App() {
  return (
    <MainProvider>
      <RootStack />
    </MainProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
