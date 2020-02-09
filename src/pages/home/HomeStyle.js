import { StyleSheet, Dimensions } from "react-native";
import swatch                     from "~/config/swatch";

const originalBannerWidth   = 863;
const originalBannerHeight  = 345;
const { width, height }             = Dimensions.get("window");
const bannerWidth           = width - 40;
const bannerHeight          = (bannerWidth / originalBannerWidth) * originalBannerHeight;

export default StyleSheet.create({
  mainView : {
    backgroundColor   : swatch.white,
    marginBottom      : 5,
    paddingVertical   : 10
  },
  smallLogoImage : {
    width             : 68,
    height            : 15,
    marginLeft        : 20
  },
  balanceView : {
    backgroundColor   : swatch.semiWhite,
    padding           : 2.5,
    marginRight       : 20,
    borderRadius      : 24,
    flexDirection     : "row"
  },
  balanceIconImage : {
    width             : 19,
    height            : 19
  },
  balanceText : {
    fontFamily        : "AvenirNext-Medium",
    fontSize          : 14,
    lineHeight        : 19,
    textAlignVertical : "center",
    marginLeft        : 8,
    marginRight       : 12
  },
  slideStyle : {
    width             : width,
    height            : height,
    // marginHorizontal  : 5,
    // marginTop : 31
  },
  infoView : {
    flexDirection     : "row",
    paddingTop        : 8,
    paddingHorizontal : 20
  },
  indicatorView : {
    width             : 7,
    height            : 7,
    backgroundColor   : swatch.darkGray,
    borderRadius      : 7,
    marginRight       : 6
  },
  activeIndicatorView : {
    width             : 7,
    height            : 7,
    backgroundColor   : swatch.orange,
    borderRadius      : 7,
    marginRight       : 6
  },
  seeAllPromoButton : {
    position          : "absolute",
    right             : 20,
    top               : 4
  },
  seeAllPromoText : {
    fontFamily          : "Avenir-Medium",
    fontSize            : 11,
    lineHeight          : 15,
    includeFontPadding  : true,
    textAlignVertical   : "center",
    color               : swatch.green
  },
  slideImage : {
    borderRadius : 8,
    width         : width,
    height        : height
  }
});