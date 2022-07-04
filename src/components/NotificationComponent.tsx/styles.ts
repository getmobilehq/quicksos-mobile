import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"
import { primaryColors } from "../../../constants"
const styles = StyleSheet.create({
container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems : "flex-start",
    justifyContent : "space-between",
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    marginVertical: scale(10),
    borderRadius: scale(10),
    backgroundColor: primaryColors.naturalColorDark,
    padding: scale(5),
    height: scale(60),
}, 
content: {
marginLeft: 10,
width: 200,
height: "100%",
display: "flex",
justifyContent: "space-between",
// alignItems: "center",
},
boldText: {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: scale(14),
    color: primaryColors.white,
},
text: {
fontFamily: 'Montserrat',
fontWeight: "400",
fontSize: scale(14),
color: primaryColors.white,
},
underlineText: {
    fontFamily: 'Montserrat',
    fontWeight: "700",
    fontSize: scale(14),
    color: primaryColors.white,
    // textDecoration: "underline", 
    textDecorationStyle: "solid", 
    textDecorationColor: "white",
    textDecorationLine: "underline"
}
})

export default styles