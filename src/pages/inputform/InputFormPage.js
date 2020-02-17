import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Picker
}                                   from "react-native";
import PropTypes                    from "prop-types";
import InputFormPresenter            from "./InputFormPresenter";
import InputFormStyle                from "./InputFormStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import swatch                       from "~/config/swatch";
import KeyboardSpacer      from "react-native-keyboard-spacer";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

class InputFormPage extends Component {
  presenter                 = new InputFormPresenter(this);

  static navigationOptions  = { header : null };
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.setState({
      location : this.props.navigation.getParam("location"),
      delta : this.props.navigation.getParam("delta")
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    const { navigation } = this.props;
    navigation?.pop();
    return true;
  }

  register() {
    this.presenter.register();
  }

  render() {
    const {location, delta} = this.state;
    return (
      <View style={InputFormStyle.mainView}>
        {location && delta ?
         <MapView provider={PROVIDER_GOOGLE}
         style={{
           height: "100%",
           width: "100%"
         }}
         initialRegion={{
           latitude: location?.latitude,
           longitude: location?.longitude,
           latitudeDelta: delta?.latitudeDelta,
           longitudeDelta: delta?.longitudeDelta
         }}>
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude
              }}
            />
            </MapView> : <View/>}
       
      </View>
    );
  }
}

export default Reducer.connect(InputFormPage, InputFormPresenter);