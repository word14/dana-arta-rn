import { StyleSheet } from "react-native";
import swatch from "~/config/swatch";

export default StyleSheet.create({
    mainView: {
        flex: 1
    },
    touchView: {
        alignSelf: "center"
    },
    searchIcon: {
        width: 15,
        height: 15,
        marginLeft: 10
    },
    searchTextInput: {
        flex: 1,
        paddingHorizontal: 10,
        includeFontPadding: true,
        fontFamily: "AvenirNext-Medium",
        fontSize: 13,
        lineHeight: 19,
        textAlign: "left"
    },
    searchView: {
        flex: 1, flexDirection: "row",
        marginLeft: -15,
        height: 29,
        borderRadius: 6,
        marginRight: -50,
        backgroundColor: swatch.primaryGray
    },
    separator: {
        height: 1,
        backgroundColor: swatch.primaryGray
    }
});