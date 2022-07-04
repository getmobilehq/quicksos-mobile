import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center,Modal, Checkbox } from 'native-base';
import styles from "./styles"
interface Modalprops {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    buttonText?: string;
    onClickButton: () => void;
}

const RequestResponder = (props:Modalprops) => {
    const data = [
        {
            id: 1,
            name: "LASEMA"
        },
        {
            id: 2,
            name: "LASMA"
        },
        {
            id: 3,
            name: "FIRE SERVICE"
        },
        {
            id: 4,
            name: "LASAMBUS"
        },
        {
            id: 5,
            name: "NPF"
        },
        {
            id: 6,
            name: "LASERA"
        },
        {
            id: 7,
            name: "LASMIRA"
        },
    ]
   
  return (
    <Center>
    <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)}>
      <Modal.Content maxWidth="450px" height={"200px"} style={styles.modalContent}>
        {/* <Modal.CloseButton /> */}
        <Text style={styles.headerText}>Select desired responders</Text>
        <View style={styles.listOfCheckBoxs}>
        <Checkbox.Group accessibilityLabel="choose values">
            {data.map(data => (
                <Checkbox value={data.name} my={2}>
                {data.name}
                </Checkbox>
            ))}
      {/* <Checkbox value="two">Software Development</Checkbox> */}
    </Checkbox.Group>
    </View>


        {/* //Button */}
        <TouchableOpacity onPress={() => props.onClickButton()}>
        <Box alignItems="center" width="100%" py="5" mt="2.5">
              <Button isLoading={false} variant="solid" width="250">
            {props.buttonText}
              </Button>
          </Box>      
        </TouchableOpacity>

      </Modal.Content>
    </Modal>
  </Center>
  )
}

export default RequestResponder