import { View, Text , TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { Box, Button, Center,Modal, Checkbox } from 'native-base';
import styles from "./styles"
import axios from '../../../axios';
import endpoints from '../../../endpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

interface Modalprops {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    buttonText?: string;
    onClickButton: () => void;
    Responders: []
    case: {
        case: string
        id: string
    }
}

const RequestResponder = (props:Modalprops) => {
    const [groupValues, setGroupValues] = React.useState([]);
    const [loading, setLoading] = React.useState(false)

    const sendRequest = async () => {
      setLoading(true)
        const body = {
            case: props.case.case,
            assignment: props.case.id,
            agencies: groupValues,
        }
        axios.post(endpoints.backup, body).then(res => {
      console.log(res.data.message)
      if (!!res.data.message && res.data.message === "success") {
          props.onClickButton()
      }
        } ).catch(error => {
            console.log(error.response.data);
        }).finally(() => {  
          setLoading(false)
        })
    }
  return (
    <Center>
    <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)}>
      <Modal.Content maxWidth="450px" height={"200px"} style={styles.modalContent}>
        {/* <Modal.CloseButton /> */}
        <Text style={styles.headerText}>Select desired responders</Text>
        <View style={styles.listOfCheckBoxs}>
        <Checkbox.Group accessibilityLabel="choose values"
        onChange={setGroupValues} value={groupValues} 
        >
            {props.Responders?.map((data: {acronym: string, id: string}) => (
                <Checkbox key={data.id} value={data.id} my={2}>
                {data.acronym}
                </Checkbox>
            ))}
    </Checkbox.Group>
    </View>
        <Box alignItems="center" width="100%" py="5" mt="2.5">
              <Button 
              onPress={ () => {
                sendRequest()
              }}
              isLoading={loading} variant="solid" width="250">
            {props.buttonText}
              </Button>
          </Box>      
      </Modal.Content>
    </Modal>
  </Center>
  )
}

export default RequestResponder