import React, { Component }              from "react";
import { withNavigation }                from "react-navigation";
import  Reducer                          from "~/core/Reducer";
import {
  View,
  Text,
  Picker,
  TouchableOpacity,
  TextInput,
  Image,
  Linking
}                                        from "react-native";
import PropTypes                         from "prop-types";
import InputFormPresenter       from "./InputFormPresenter";
import InputFormStyle           from "./InputFormStyle";
import lang                              from "~/lang";
import KeyboardSpacer      from "react-native-keyboard-spacer";
import waIcon                       from "@assets/wa-icon.png";

class InputFormComponent extends Component {
  presenter                 = new InputFormPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object
  };

  render() {
    const { 
      nama,
      no_hp,
      email,
      alamat,
      no_ktp,
      cabang
    }            = this.state;
    const cabangData = [
        {
            value : "-Pilih Cabang-"
        },
        {
            value : "Balaraja"
        },
        {
            value : "Cengkareng"
        },
        {
            value : "Cikupa"
        },
        // {
        //     value : "Freetrend"
        // },
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
              value={nama}
              onChangeText={value => this.setState({ nama : value })}
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
                value={no_hp}
                onChangeText={value => this.setState({ no_hp : value })}
              />
            </View>
            <TextInput 
              ref={ref => this.textAddress = ref }
              style={InputFormStyle.nameTextInput}
              placeholder={"Alamat"}
              value={alamat}
              onChangeText={value => this.setState({ alamat : value })}
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
              value={no_ktp}
              onChangeText={value => this.setState({ no_ktp : value })}
            />
            <Picker
            selectedValue={this.state.cabang}
            // style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
                this.setState({cabang: itemValue})
            }>
                {
                    cabangData?.map((item, key) => <Picker.Item key={key} label={item?.value} value={item?.value} />)
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
            onPress={() => this.presenter.submitData()}
          >
            <Text style={InputFormStyle.registerText}>{"Kirim"}</Text>
          </TouchableOpacity>
          {/* <View style={{
              position: "absolute",
              bottom : 10
          }}> */}
          <Text style={
              {
                  fontSize: 20,
                  alignSelf: "center",
                  marginTop: 20
              }
          }>
              WA Kami di:
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://api.whatsapp.com/send?phone=6285218170602')}>
            <Image source={waIcon} resizeMode="contain" style={{
            height: 50,
            width: 50,
            alignSelf : "center"
            }}/>
        </TouchableOpacity>
        {/* </View> */}
        </View>
        <KeyboardSpacer/>
      </View>
    );
  }
}

export default Reducer.connect(withNavigation(InputFormComponent), InputFormPresenter);