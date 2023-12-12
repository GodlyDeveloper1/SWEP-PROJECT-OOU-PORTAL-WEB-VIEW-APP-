import React, { useContext, useEffect, useRef, useState } from 'react'
import "react-native-get-random-values"
import WebView from 'react-native-webview'
import { AppContext } from '../helper/constants'
import { View } from 'react-native'
import ModalComponent from './component/ModalComponent'

const WebViewScreen = () => {
    const webViewRef = useRef()
    const [Url, setUrl] = useState('https://portal.oouagoiwoye.edu.ng')
    const {setisloading, isLoading, reload, setReload, goBack, setGoBack, setSiteTitle, goForward, setGoForward} = useContext(AppContext)
    useEffect(() => {
      
      if(reload){
        setisloading(true)
        setTimeout(() => {
          setReload(false)
          setUrl(Url)
          setisloading(false)
        }, 5000);
      }
       if(goBack){
        goBackHandler()
        setGoBack(false)
       }

       if(goForward){
        goForwardHandler()
        setGoForward(false)
       }

    }, [reload, goBack, goForward])
    
    const goForwardHandler = () => {
      if (webViewRef.current) {
        webViewRef.current.goForward()
      }
    };

    const goBackHandler = () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
      }
    };
  return (
    <View  style={{flex:1}}>
       <WebView
       ref={webViewRef}
        style={{flex:1}}
        source={{ uri: Url }}
        onNavigationStateChange={(navState) => {
          setSiteTitle(navState.title)
          setUrl(navState.url)
        }}
        
        onLoadStart={() => setisloading(true)}
        onLoadEnd={() => {
          setisloading(false)
        }}
        onError={(error) => console.log(error.description)}
        
        />
        <ModalComponent visible={isLoading} />
    </View>
  )
}

export default WebViewScreen