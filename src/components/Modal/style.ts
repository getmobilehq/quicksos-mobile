import { StyleSheet } from "react-native";
import { Modal } from 'native-base';
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
    modalContent: {
        display: 'flex', 
        alignItems:"center",
        justifyContent: 'center',
        paddingHorizontal: scale(10),
        width: "90%"
        // paddingVertical: scale(10)
    },
modalText: {
    textAlign: 'center',
    fontSize: 20,
}
})

export default styles;