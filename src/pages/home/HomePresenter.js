import Presenter from "~/core/Presenter";
import BranchService from "~/service/BranchService";
export default class HomePresenter extends Presenter {
  branchService = new BranchService(this);
  constructor(component) {
    super(component);
    component.state = {};
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }

  generateHashImage() {
    const { hashImage } = this.state;
    this.setState({
      hashImage: hashImage ? hashImage : new Date().getTime()
    })
  }

  async getBranch() {
    const { hashImage } = this.state;
    try {
      const response = await this.branchService.getBranch(hashImage);
      if (response?.data) {
        this.setState({ branch: response.data });
      }
    } catch (e) {
      console.log(e);
    }
  }
}