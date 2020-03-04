import React, { Component } from "react";
import Reducer from "~/core/Reducer";
import {
  BackHandler,
  View,
  Dimensions,
  TouchableOpacity,
  Animated
} from "react-native";
import PropTypes from "prop-types";
import HomePresenter from "./HomePresenter";
import HomeStyle from "./HomeStyle";
import { createNavigationOptions } from "~/helper/NavigatorHelper";
import Carousel from "react-native-snap-carousel";
import ImageView from "react-native-image-view";
import InputFormComponent from "~/component/inputform/InputFormComponent";
import ImageProgress from "react-native-image-progress";
import Progress from 'react-native-progress/Bar';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import OpenMap from "react-native-open-map";
import Toast from 'react-native-simple-toast';
import BranchComponent from "~/component/branch/BranchComponent";
const { width, height } = Dimensions.get("window");

class HomePage extends Component {
  presenter = new HomePresenter(this);
  state = {
    backClickCount: 0
  };
  static navigationOptions = createNavigationOptions(
    "KOSPIN DANA ARTA",
    (navigation) => ({
      headerLeft: <View />,
      headerRight: <View style={{
        width: 128
      }}>
      </View>
    })
  );
  static propTypes = {
    navigation: PropTypes.object
  };

  async componentDidMount() {
    await BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    await this.closeViewer();
    await this.presenter.generateHashImage();
    await this.presenter.getBranch();
    await this.presenter.buildBranch();
    this.springValue = await new Animated.Value(100);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    if (this.state.backClickCount == 1) {
      this.setState({ backClickCount: 0 });
      BackHandler.exitApp();
    } else {
      this._spring();
    }
    return true;
  }

  closeViewer() {
    this.setState({
      showImage: false,
      imageUrl: null
    })
  }

  setResetCount() {
    this.setState({ backClickCount: 0 });
  }

  async _spring() {
    this.setState({ backClickCount: 1 }, () => {
      Toast.showWithGravity('Tekan Sekali Lagi untuk keluar', 1000, Toast.BOTTOM);
      setTimeout(() => this.setState({ backClickCount: 0 }), 1500);
    });
  }

  render() {
    const { navigation } = this.props;
    const { hashImage, branch, branchData } = this.state;
    const menu = [
      {
        pageType: "start_page",
        imageUrl: "http://simpanan.danaarta.net/mobileapp/images/f_awal.png?random_number=" + hashImage,
      },
      {
        pageType: "middle_page"
      },
      {
        pageType: "end_page"
      }
    ];
    const delta = {
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021
    }
    const waUrl = 'http://api.whatsapp.com/send?phone=6285218170602';
    return (
      <View>
        <View>
          <Carousel
            data={menu || []}
            sliderWidth={width}
            itemWidth={width}
            itemHeight={height}
            inactiveSlideOpacity={0.3}
            inactiveSlideScale={1}
            activeOpacity={0.85}
            enableMomentum={false}
            renderItem={
              ({ item }) => {
                switch (item.pageType) {
                  case "start_page":
                    return this.getFirstPage(item);
                  case "middle_page":
                    return <BranchComponent branch={branch} onPressImage={() => this.showImage(item?.imageUrl)} />;
                  case "end_page":
                    return <InputFormComponent branchData={branchData} />;
                }
              }
            }
          />
        </View>
        <ImageView isVisible={this.state.showImage}
          images={[
            {
              source: {
                uri: this.state.imageUrl,
              },
              width: 597,
              height: 1024,
            },]}
          imageIndex={0}
          onClose={this.closeViewer.bind(this)} />
      </View>
    );
  }

  showImage(imageUrl) {
    this.setState({
      showImage: true,
      imageUrl
    });
  }

  getFirstPage(item) {
    return <ImageProgress
      source={{ uri: item?.imageUrl }}
      indicator={Progress}
      indicatorProps={{
        size: 80,
        borderWidth: 0,
        color: 'rgba(150, 150, 150, 1)',
        unfilledColor: 'rgba(200, 200, 200, 0.2)'
      }}
      style={HomeStyle.slideImage} />;
  }


}

export default Reducer.connect(HomePage, HomePresenter);