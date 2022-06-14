import { StyleSheet } from "react-native";
// import { scale } from "react-native-size-matters";
import { primaryColors } from "../../../constants/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20
    },
    loginIntro: {
        // fontFamily: 'Montserrat',
        color: primaryColors.black,
        fontWeight: "700",
        fontSize: 24,
        lineHeight: 29,
        textAlign: "center",
        paddingVertical: 10
    },
    smallText: {
        textAlign: "center",
        color: primaryColors.primaryGray,
        // fontFamily: 'Open Sans',
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,
    }   ,
    changePassword: {
    // fontFamily: 'Montserrat',
    marginBottom: 10,
    fontWeight: "400",
    fontSize: 14,
    color: primaryColors.naturalColor
    }
  
});

export default styles;
