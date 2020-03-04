import { StyleSheet, Dimensions } from "react-native";
import swatch from "~/config/swatch";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mainView: {
        // backgroundColor : swatch.secondaryColor,
        flex: 1,
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 15,
        height: height / 7
    },
    imageContainer: {
        backgroundColor: "yellow",
        borderRadius: 8
    },
    informationContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
    },
    contactView: {
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    restaurantNameText: {
        fontFamily: "AvenirNext-Medium",
        fontSize: 14,
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
    },
    orderNowIcon: {
        height: 12,
        width: 12
    },
    mapsStyle: {
        height: "100%",
        width: 80,
        borderRadius: 20
    },
    waView: {
        height: 25,
        width: 25,
    },
    showImageButton: {
        marginTop: 20
    },
    iconPhoneView: {
        color: swatch.secondaryColor
    },
    descView: {
        width: width / 3
    }
});