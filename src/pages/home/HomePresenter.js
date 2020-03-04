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
      const response = await this.branchService.getBranch();
      if (response?.data) {
        response.data = response.data.filter((item) => {
          return item.latitude != null;
        })
        response.data.forEach(element => {
          element.images += "?random_number=" + hashImage
        });
        this.setState({ branch: response.data });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async buildBranch() {
    const { branch } = this.state;
    var branchData = [];
    branch.forEach((item, index) => {
      if (index == 0) {
        branchData.push("-Pilih Cabang-");
      }
      branchData.push(item.nama);
    });
    this.setState({ branchData });
  }
}