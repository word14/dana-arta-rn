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

class InputFormPage extends Component {
  presenter                 = new InputFormPresenter(this);

  static navigationOptions  = { header : null };
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.textName.focus();
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
    const { 
      isChecked, 
      name, 
      phone, 
      email,
      address,
      ktp, 
      pin
    }            = this.state;
    const { navigation }  = this.props;
    const cabangData = [
        {
            value : "Balaraja"
        },
        {
            value : "Cengkareng"
        },
        {
            value : "Cikupa"
        },
        {
            value : "Freetrend"
        },
        {
            value : "Jatake"
        },
        {
            value : "Pasar Kemis"
        },
        {
            value : "Selikur"
        }
    ]
    return (
      <View style={InputFormStyle.mainView}>
        <View style={{ flex : 1 }}>
          <Text style={InputFormStyle.verificationTitleText}>{"Hubungi Kami"}</Text>
          <View style={InputFormStyle.secondaryView}>
            <TextInput 
              ref={ref => this.textName = ref }
              style={InputFormStyle.nameTextInput}
              placeholder={"Nama"}
              value={name}
              onChangeText={value => this.setState({ name : value })}
            />
            <View style={InputFormStyle.phoneView}>
              <View style={InputFormStyle.prefixView}>
                <Text style={InputFormStyle.prefixText}>+62</Text>
                <View style={InputFormStyle.separatorVertical}></View>
              </View>
              <TextInput 
                ref={ref => this.textNumber = ref }
                keyboardType="numeric"
                style={InputFormStyle.phoneNumberTextInput} 
                placeholder={"No. HP"}
                value={phone}
                onChangeText={value => this.setState({ phone : value })}
              />
            </View>
            <TextInput 
              ref={ref => this.textAddress = ref }
              style={InputFormStyle.nameTextInput}
              placeholder={"Alamat"}
              value={address}
              onChangeText={value => this.setState({ address : value })}
            />
            <TextInput 
              ref={ref => this.textEmail = ref }
              style={InputFormStyle.nameTextInput}
              placeholder={"Email"}
              value={email}
              onChangeText={value => this.setState({ email : value })}
            />
             <TextInput 
              ref={ref => this.textKtp = ref }
              keyboardType="numeric"
              style={InputFormStyle.nameTextInput}
              placeholder={"No. KTP"}
              value={ktp}
              onChangeText={value => this.setState({ ktp : value })}
            />
            <Picker
            selectedValue={this.state.language}
            // style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
            }>
                {
                    cabangData?.map((item, key) => <Picker.Item key label={item?.value} value={item?.value} />)
                }
            </Picker>
            
          </View>
          <TouchableOpacity
            style={InputFormStyle.agreementView}
            onPress={() => this.setState({ isChecked : !isChecked })}
            activeOpacity={0.85}
          >
          </TouchableOpacity>
          <TouchableOpacity 
            style={InputFormStyle.registerButton}
            onPress={this.register.bind(this)}
          >
            <Text style={InputFormStyle.registerText}>{"Kirim"}</Text>
          </TouchableOpacity>
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(InputFormPage, InputFormPresenter);