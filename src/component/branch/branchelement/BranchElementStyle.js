import { StyleSheet } from "react-native";
import swatch from "~/config/swatch";

export default StyleSheet.create({
    mainView: {
        // backgroundColor : swatch.secondaryColor,
        flex: 1,
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    imageContainer: {
        backgroundColor: "yellow",
        borderRadius: 8
    },
    informationContainer: {
        flex: 1,
        marginLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    restaurantNameText: {
        fontFamily: "AvenirNext-Medium",
        fontSize: 16,
        lineHeight: 21,
        textAlign: "left",
        color: swatch.primaryBlack,
        marginBottom: 4
    },
    restaurantTypeText: {
        color: swatch.quaternaryGray,
        fontFamily: "AvenirNext-Medium",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "left",
        marginBottom: 4
    },
    restaurantLocationText: {
        fontFamily: "AvenirNext-Medium",
        fontSize: 10,
        lineHeight: 14,
        textAlign: "left",
        color: swatch.quaternaryGray,
        marginBottom: 6
    },
    orderNowContainer: {
        alignItems: "center",
    },
    orderNowText: {
        color: swatch.secondaryColor,
        fontFamily: "AvenirNext-Medium",
        fontSize: 12,
        lineHeight: 16,
        marginRight: 5,
    },
    orderNowIcon: {
        height: 12,
        width: 12
    },
    mapsStyle: {
        height: "100%",
        width: 80,
        borderRadius: 20
    }
});