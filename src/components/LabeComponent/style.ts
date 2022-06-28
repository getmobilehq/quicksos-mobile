import { StyleSheet } from "react-native";
import { primaryColors } from "../../../constants";

const styles = StyleSheet.create({
container: {
    width: "100%",
    borderBottomColor: primaryColors.naturalColorDark,
    borderBottomWidth: 1,
    borderStyle: "solid",
    height: 50,
    display: "flex",
    justifyContent: "space-between",
},
title: {
    fontFamily: 'Montserrat',
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 17,
    color: primaryColors.primaryGray,
},

content: {
    fontFamily: 'Montserrat',
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22
    
}
})

export default styles;