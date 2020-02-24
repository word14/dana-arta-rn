import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import Reducer from "~/core/Reducer";
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    Image
} from "react-native";
import PropTypes from "prop-types";
import BranchElementPresenter from "./BranchElementPresenter";
import BranchElementStyle from "./BranchElementStyle";
import MapView, { PROVIDER_DEFAULT, Marker } from "react-native-maps";
import OpenMap from "react-native-open-map";
import ImageView from "react-native-image-view";
import waIcon from "@assets/wa-icon.png";
import { Feather } from "react-native-vector-icons"
import swatch from "~/config/swatch";

class BranchElementComponent extends Component {
    presenter = new BranchElementPresenter(this);

    static propTypes = {
        navigation: PropTypes.object,
        branchDetail: PropTypes.object
    };

    showImage(imageUrl) {
        this.setState({
            showImage: true,
            imageUrl
        });
    }

    closeViewer() {
        this.setState({
            showImage: false,
            imageUrl: null
        })
    }

    render() {
        const delta = {
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0021
        };
        const { branchDetail } = this.props;
        return (
            <View
                style={BranchElementStyle.mainView}>
                {branchDetail.latitude && branchDetail.longitude ?
                    <TouchableOpacity
                        activeOpacity={0.85}
                        style={{
                            borderRadius: 20
                        }}
                    >
                        <MapView provider={PROVIDER_DEFAULT}
                            style={BranchElementStyle.mapsStyle}
                            onPress={() => OpenMap.show({
                                latitude: parseFloat(branchDetail?.latitude),
                                longitude: parseFloat(branchDetail?.longitude),
                            })}
                            initialRegion={{
                                latitude: parseFloat(branchDetail?.latitude),
                                longitude: parseFloat(branchDetail?.longitude),
                                latitudeDelta: delta.latitudeDelta,
                                longitudeDelta: delta.longitudeDelta
                            }}>
                            <Marker
                                style={{
                                    borderRadius: 20,
                                    width: 10,
                                    height: 10
                                }}
                                onPress={() => OpenMap.show({
                                    latitude: parseFloat(branchDetail?.latitude),
                                    longitude: parseFloat(branchDetail?.longitude),
                                })}
                                coordinate={{
                                    latitude: parseFloat(branchDetail?.latitude),
                                    longitude: parseFloat(branchDetail?.longitude)
                                }}
                            />
                        </MapView>
                    </TouchableOpacity>
                    : <View />}
                <View style={BranchElementStyle.informationContainer}>
                    <View style={BranchElementStyle.descView}>
                        <Text style={BranchElementStyle.restaurantNameText}>{branchDetail?.nama}</Text>
                        <Text style={BranchElementStyle.restaurantLocationText}>{branchDetail?.alamat}</Text>
                    </View>
                    <View style={BranchElementStyle.orderNowContainer}>
                        <View style={BranchElementStyle.contactView}>
                            <TouchableOpacity style={{
                                marginRight: 8
                            }}>
                                <Feather onPress={() => Linking.openURL('tel:' + branchDetail?.no_telp)}
                                    name="phone" size={25} style={BranchElementStyle.iconPhoneView} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('http://api.whatsapp.com/send?phone=' + branchDetail?.no_wa)}>
                                <Image source={waIcon} resizeMode="contain" style={BranchElementStyle.waView} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.showImage(branchDetail.images)}
                            style={BranchElementStyle.showImageButton}>
                            <Text style={BranchElementStyle.orderNowText}>
                                {"Lihat Foto"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ImageView isVisible={this.state.showImage ? true : false}
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
}

export default Reducer.connect(withNavigation(BranchElementComponent), BranchElementPresenter);