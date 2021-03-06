import { View, Text, TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

import React, { useState } from 'react'
import { Box, Button, Center, FormControl, Input, Modal } from 'native-base';
import styles from "./style"
interface Modalprops {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    text: string;
    buttonText?: string;
    onClickButton: () => void;
}

const ModalComponent = (props:Modalprops) => {
   
  return (
    <Center>
    <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)}>
      <Modal.Content maxWidth="450px" height={300} style={styles.modalContent}>
        <Text style={styles.modalText}> {props.text}</Text>
        <Box alignItems="center" width="90%" py="5" mt="2.5">
              <Button 
              onPress={() => props.onClickButton()}
              isLoading={false} variant="solid" width="250">
            {props.buttonText}
              </Button>
          </Box>      
      </Modal.Content>
    </Modal>
  </Center>
  )
}

export default ModalComponent