import { StyleSheet } from "react-native";
import { primaryColors } from "../../../constants";
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: primaryColors.white,
    marginHorizontal: scale(10),
},
label: {
    fontFamily: 'Montserrat',
fontWeight: "400",
fontSize: 14,
color: primaryColors.white,
},
alertHeader: {
    fontFamily: 'Montserrat',
fontStyle: "normal",
fontWight: "600",
fontSize: scale(24),
color: primaryColors.white,
paddingVertical:scale(10),
},
alertContainer: {
backgroundColor: primaryColors.naturalColor,
height: "100%",
paddingHorizontal: scale(20),
paddingVertical: scale(10),
flex: 1,
},
stretch: {
    width: "100%",
    height: 180,
    // resizeMode: 'stretch',
    paddingTop:10,
    borderRadius: 10,
  },
})
export default styles;