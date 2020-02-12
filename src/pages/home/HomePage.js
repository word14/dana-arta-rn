import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking,
  Image
}                                   from "react-native";
import PropTypes                    from "prop-types";
import HomePresenter                from "./HomePresenter";
import HomeStyle                    from "./HomeStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import Carousel                     from "react-native-snap-carousel";
import ImageView                    from "react-native-image-view";
import waIcon                       from "@assets/wa-icon.png";
import InputFormComponent           from "~/component/inputform/InputFormComponent";
import ImageProgress                        from "react-native-image-progress";
import Progress                     from 'react-native-progress/Bar';
import MapView, { PROVIDER_GOOGLE, Marker} from "react-native-maps";

class HomePage extends Component {
  presenter                 = new HomePresenter(this);

  static navigationOptions  = createNavigationOptions(
    "KOSPIN DANA ARTA",
    (navigation) => ({
      headerLeft  : <View/>,
      headerRight : <View style={{
        width :128
      }}>
        <TouchableOpacity onPress={() => Linking.openURL('http://api.whatsapp.com/send?phone=6285218170602')}>
        <Image source={waIcon} resizeMode="contain" style={{
          height: 25,
          width: 25,
          alignSelf : "center"
        }}/>
        </TouchableOpacity>
        </View>
    })
  );
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.closeViewer();
    this.generateHashImage();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    const { navigation } = this.props;
    navigation?.pop();
    return true;
  }

  closeViewer(){
    this.setState({
      showImage:false,
      imageUrl:null
    })
  }

  generateHashImage() {
    const { hashImage } = this.state;
    this.setState({
      hashImage : hashImage ? hashImage : new Date().getTime()
    })
  }

  render() {
    const { navigation }  = this.props;
    const { hashImage } = this.state;
    const { width, height } = Dimensions.get("window");
    const banner = [
      {
        imageUrl : "http://simpanan.danaarta.net/mobileapp/images/f_awal.png?random_number=" + hashImage,
        location : null
      },
      {
        imageUrl : "http://simpanan.danaarta.net/mobileapp/images/f_cengkareng.png?random_number=" + hashImage,
        location : {
          latitude : -6.141892433166504,
          longitude : 106.73435974121094
        }
      },
      {
        imageUrl : "http://simpanan.danaarta.net/mobileapp/images/f_balaraja.png?random_number=" + hashImage,
        location : {
          latitude : -6.2095276,
          longitude : 106.4487719
        }
      },  
      {
        imageUrl : "http://simpanan.danaarta.net/mobileapp/images/f_cikupa.png?random_number=" + hashImage,
        location : {
          latitude : -6.2582167,
          longitude : 106.5268503
        }
      },
      {
        imageUrl : "http://simpanan.danaarta.net/mobileapp/images/f_jatake.png?random_number=" + hashImage,
        location : {
          latitude : -6.202711582183838,
          longitude : 106.56072235107422
        }
      },
      {
        imageUrl : "http://simpanan.danaarta.net/mobileapp/images/f_pasarkemis.png?random_number=" + hashImage,
        location : {
          latitude : -6.171642780303955,
          longitude : 106.55500793457031
        }
      },
      {
        imageUrl : "http://simpanan.danaarta.net/mobileapp/images/f_selikur.png?random_number=" + hashImage,
        location : {
          latitude : -6.138480186462402,
          longitude : 106.30382537841797
        }
      },
      {
        imageUrl : "end_page"
      }
    ];
    const delta = {
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
    const waUrl = 'http://api.whatsapp.com/send?phone=6285218170602';
    return (
      <View>
        <View>
          <Carousel
              data={banner || []}
              sliderWidth={width}
              itemWidth={width}
              itemHeight={height}
              slideStyle={HomeStyle.slideStyle}
              inactiveSlideOpacity={0.3}
              inactiveSlideScale={1}
              enableMomentum={false}
              renderItem={
                ({ item }) => 
                {
                  if(item.imageUrl == "end_page") {
                   return  <InputFormComponent/>
                  } else {
                   return <TouchableOpacity 
                   onPress={() => this.setState({
                      showImage : true,
                      imageUrl : item?.imageUrl
                    })}
                   >
                      <ImageProgress 
                        source={{uri: item?.imageUrl}} 
                        indicator={Progress}
                        indicatorProps={{
                          size: 80,
                          borderWidth: 0,
                          color: 'rgba(150, 150, 150, 1)',
                          unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }}
                        style={HomeStyle.slideImage}/>
                        {item?.location ? 
                       <TouchableOpacity style={{
                         position : "absolute",
                         bottom: 100,
                         left: 10
                       }} onPress={() => navigation.navigate("InputFormPage", {location : item?.location, delta: delta})}>
                        <MapView provider={PROVIDER_GOOGLE}
                      style={{
                        height: height / 4,
                        width: width - 20,
                      }}
                      initialRegion={{
                        latitude: item?.location?.latitude,
                        longitude: item?.location?.longitude,
                        latitudeDelta: delta.latitudeDelta,
                        longitudeDelta: delta.longitudeDelta
                      }}>
                        <Marker
                          coordinate={{
                            latitude: item?.location?.latitude,
                            longitude: item?.location?.longitude
                          }}
                        />
                      </MapView>
                      </TouchableOpacity>
                      : <View/>}
                    </TouchableOpacity>
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
              onClose={this.closeViewer.bind(this)}/>

      </View>
    );
  }

  
}

export default Reducer.connect(HomePage, HomePresenter);