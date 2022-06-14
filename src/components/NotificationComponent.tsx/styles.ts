import { StyleSheet } from "react-native"
import { primaryColors } from "../../../constants"
const styles = StyleSheet.create({
container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems : "flex-start",
    justifyContent : "space-between",
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: primaryColors.naturalColorDark,
    padding: 10,
    height: 80,
}, 
content: {
marginLeft: -100,
height: "100%",
display: "flex",
justifyContent: "space-between",
},
boldText: {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    color: primaryColors.white,
},
text: {
fontFamily: 'Montserrat',
fontWeight: "400",
fontSize: 14,
color: primaryColors.white,
},
underlineText: {
    fontFamily: 'Montserrat',
    fontWeight: "700",
    fontSize: 14,
    color: primaryColors.white,
    textDecoration: "underline", 
    textDecorationStyle: "solid", 
    textDecorationColor: "white",
    textDecorationLine: "underline"
}
})

export default styles