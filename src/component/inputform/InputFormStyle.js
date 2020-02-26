import { StyleSheet } from "react-native";
import swatch from "~/config/swatch";

export default StyleSheet.create({
  mainView: {
    backgroundColor: swatch.white,
    // flex: 1
  },
  verificationTitleText: {
    fontFamily: "Futura-Bold",
    marginTop: 20,
    textAlign: "center",
    color: swatch.primaryColor,
    fontSize: 25
  },
  secondaryView: {
    paddingHorizontal: 20,
    marginTop: 30
  },
  nameTextInput: {
    paddingVertical: 4.5,
    paddingHorizontal: 10,
    lineHeight: 27,
    backgroundColor: swatch.primaryGray,
    textAlign: "left",
    borderRadius: 6,
    fontFamily: "AvenirNext-Medium",
    fontSize: 15,
    marginBottom: 15,
    color: swatch.primaryBlack
  },
  phoneView: {
    backgroundColor: swatch.primaryGray,
    borderRadius: 6,
    fontSize: 20,
    marginBottom: 21.5,
    flexDirection: "row",
    alignItems: "center"
  },
  prefixView: {
    paddingLeft: 10,
    paddingVertical: 5,
    flexDirection: "row"
  },
  prefixText: {
    marginRight: 10,
    fontSize: 15,
    lineHeight: 27,
    color: swatch.primaryBlack,
    fontFamily: "AvenirNext-Medium"
  },
  separatorVertical: {
    width: 1,
    backgroundColor: swatch.ternaryGray
  },
  phoneNumberTextInput: {
    paddingLeft: 10,
    flex: 1,
    height: "100%",
    fontSize: 15,
    lineHeight: 27,
    color: swatch.primaryBlack,
    fontFamily: "AvenirNext-Medium"
  },
  agreementView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 15.5
  },
  agreementText: {
    fontFamily: "AvenirNext-Medium",
    color: swatch.primaryBlack,
    marginLeft: 17,
    fontSize: 16,
    lineHeight: 22
  },
  bottomView: {
    paddingHorizontal: 23.5,
    bottom: 0,
    position: "absolute",
    width: "100%"
  },
  borderAndTextContainer: {
    paddingVertical: 15,
    width: "100%",
    borderTopWidth: 1,
    borderColor: swatch.borderColor,
    flexDirection: "row",
    justifyContent: "center"
  },
  dontHaveAccountText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "AvenirNext-Medium",
    color: swatch.primaryBlack,
    textAlign: "center"
  },
  redText: {
    color: swatch.primaryColor
  },
  registerText: {
    lineHeight: 27,
    fontSize: 20,
    textAlign: "center",
    color: swatch.white
  },
  registerButton: {
    marginHorizontal: 20,
    paddingVertical: 4.5,
    borderRadius: 6,
    backgroundColor: swatch.secondaryColor,
    fontFamily: "AvenirNext-Medium"
  }
});