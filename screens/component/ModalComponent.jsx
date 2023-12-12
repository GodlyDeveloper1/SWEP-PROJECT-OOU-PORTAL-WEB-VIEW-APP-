import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const ModalComponent = ({visible=false, onDismiss=() => {}}) => {
  return (
    <Modal visible={visible} onDismiss={onDismiss}  transparent={true}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <ActivityIndicator color={'blue'} size={'large'}></ActivityIndicator>
            <Text style={{fontSize:18}}>Please Wait</Text>
        </View>
        </View>
    </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    height: 70, 
    width: 180, 
    backgroundColor: 'white',
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
})
