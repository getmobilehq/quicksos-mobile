import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center, FormControl, Input, Modal } from 'native-base';
import styles from "./style"

const ModalComponent = (props:any) => {
   
  return (
    <Center>
    <Button onPress={() => props.setShowModal(true)}>Button</Button>
    <Modal isOpen={true} onClose={() => props.setShowModal(false)}>
      <Modal.Content maxWidth="450px" height={300} style={styles.modalContent}>
        {/* <Modal.CloseButton /> */}
        <Text style={styles.modalText}> You have successfully responded to this emergency</Text>
        {/* <Modal.Header>Contact Us</Modal.Header> */}
        <Box alignItems="center" width="90%" py="5" mt="2.5">
              <Button isLoading={false} variant="solid" width="250">
            Done
              </Button>
          </Box>      
      </Modal.Content>
    </Modal>
  </Center>
  )
}

export default ModalComponent