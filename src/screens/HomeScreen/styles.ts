import {StyleSheet} from "react-native"
import { primaryColors } from "../../../constants"

const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginVertical: 10,
            marginHorizontal: 10,

        },
        dashboard: {
        width: "100%",
        height: 149,
        backgroundColor: primaryColors.naturalColor,
        borderRadius: 10,
        paddingHorizontal: 20,
        },
        dashboardHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        alignItems: "center"
        },
        dashboardHeaderText: {
            color: primaryColors.white,
            fontFamily: 'Montserrat',
            fontWeight: "600",
            fontSize: 18,
            lineHeight: 22,
        },
        locationWrapper: {
            display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // paddingVertical:10,
        marginBottom: 10,
        },
        location: {
            fontFamily: 'Montserrat',
            fontWeight: "400",
            fontSize: 14,
            color: primaryColors.white,
            marginLeft: 5,
            textTransform: "capitalize",
        },
        time: {
            fontFamily: 'Montserrat',
            fontWeight: "400",
            fontSize: 14,
            color: primaryColors.white,
            marginLeft: 5,
            // textTransform: "",
        },

        mainContent: {
            height:561,
            backgroundColor: primaryColors.naturalColor,
            marginVertical: 10,
            paddingHorizontal: 20,
        },
        notifications: {
          display: "flex", 
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between" ,
          paddingVertical: 10,
        },
        notificationText: {
            fontFamily: 'Montserrat',
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 22,
        color: primaryColors.white
        },
        tabsContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 10,
            marginBottom: 10,
        },
        tabsText: {
           color:  primaryColors.white,
           fontSize: 16,
          
        },
        tabsActive: {
            color:  primaryColors.white,
            fontSize: 16,
            textDecorationColor: primaryColors.white,
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
        },
        indicator: {
            width: 25,
            height:2,
            backgroundColor: primaryColors.white,
            marginHorizontal: 10,
        }
     
})

export default styles