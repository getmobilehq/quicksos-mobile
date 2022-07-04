import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../constants";

const styles = StyleSheet.create({
   container: {
    flex: 1,
    height: "100%",
   },

   inputComponentWrapper: {
    marginVertical: scale(10),
    marginHorizontal: scale(20),
   },
    headerText: {
        textAlign: "center",
        paddingVertical: scale(5),
        marginTop: scale(10),
        fontSize: 24,
        fontWeight: "700",
    },
    headerTextLigher: {
    fontFamily: 'OpenSans',
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 19,
    textAlign: "center",
    color: primaryColors.primaryGray
    }
})

export default styles