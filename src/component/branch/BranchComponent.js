import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import Reducer from "~/core/Reducer";
import {
    View,
    Text,
    FlatList
} from "react-native";
import PropTypes from "prop-types";
import BranchPresenter from "./BranchPresenter";
import BranchStyle from "./BranchStyle";
import BranchElementComponent from "~/component/branch/branchelement/BranchElementComponent";
import lang from "~/lang";

class BranchComponent extends Component {
    presenter = new BranchPresenter(this);

    static propTypes = {
        navigation: PropTypes.object,
        branch: PropTypes.array,
        onPressImage: PropTypes.func
    };

    render() {
        const { branch, onPressImage } = this.props;
        return (
            <View style={BranchStyle.mainView}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={branch}
                    ItemSeparatorComponent={() => {
                        return <View style={BranchStyle.separator} />;
                    }}
                    renderItem={({ item, index }) => {
                        return <BranchElementComponent branchDetail={item} />;
                    }}
                />
            </View>
        );
    }

}

export default Reducer.connect(withNavigation(BranchComponent), BranchPresenter);