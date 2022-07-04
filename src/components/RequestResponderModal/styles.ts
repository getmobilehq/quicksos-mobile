import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({ 
    modalContent: {
        width: "90%",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        paddingHorizontal: scale(20),
    },
    headerText: {
        fontFamily: 'Montserrat',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        paddingVertical: scale(10)
    },
    listOfCheckBoxs: {
        paddingHorizontal: scale(20),
    }
})

export default styles;