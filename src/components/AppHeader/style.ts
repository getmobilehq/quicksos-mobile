import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({ 
    container: {
        display: "flex",
        flexDirection: "row",
        // flex: 1,
        paddingVertical: scale(10)
    }

})

export default styles;