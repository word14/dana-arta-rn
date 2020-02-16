import Presenter from "~/core/Presenter";
import InputFormService from "~/service/InputFormService";
import Toast from 'react-native-simple-toast';

export default class InputFormPresenter extends Presenter {
  inputFormService = new InputFormService(this);
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

  async submitData() {
    const {
      nama,
      no_hp,
      alamat,
      cabang,
      perusahaan
    } = this.state;

    response = await this.inputFormService.insertData({
      nama,
      no_hp: no_hp ? "62" + no_hp : no_hp,
      email: "",
      alamat,
      no_ktp: "",
      cabang: cabang == "-Pilih Cabang-" ? null : cabang,
      perusahaan
    });

    if (response.data == true) {
      this.setState({
        nama: null,
        no_hp: null,
        alamat: null,
        perusahaan: null
      });
      Toast.showWithGravity('Data Anda Telah Berhasil Disimpan', Toast.LONG, Toast.TOP)
    } else {
      Toast.showWithGravity(`Gagal Menyimpan Data \nError: ${response.message}`, Toast.LONG, Toast.TOP)
    }


  }
}