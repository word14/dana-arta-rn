import Presenter from "~/core/Presenter";

export default class BranchPresenter extends Presenter {
    constructor(component) {
        super(component);
    }

    static mapDispatchToProps(dispatch) {
        return {};
    }

    static mapStateToProps(state) {
        return {};
    }
}