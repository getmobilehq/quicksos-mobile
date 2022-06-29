import { StyleSheet } from "react-native";
import { primaryColors } from "../../../constants";
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: primaryColors.white,
    marginHorizontal: scale(10),
},
headerStyle:{
display: "flex",
flexDirection: "row",
width: "100%",
alignItems: "center",
justifyContent: "space-between",
},
label: {
    fontFamily: 'Montserrat',
fontWeight: "400",
fontSize: 14,
color: primaryColors.white,
},
inputStyles: {
  display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
},
alertHeader: {
    fontFamily: 'Montserrat',
fontStyle: "normal",
fontWight: "600",
fontSize: scale(24),
color: primaryColors.white,
paddingVertical:scale(10),
paddingTop: scale(20)
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
    // resizeMode: 'contain',
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    paddingTop:10,
    margibTop:20,
    borderRadius: 10,
  },
  requestText: {
    textAlign: 'center',
    color: primaryColors.white,
  },

  inputIcons: {
    display: "flex",
    flexDirection: "row",
    // width: 50,
    justifyContent: "space-between",
    alignItems: "center",
  }
})
export default styles;