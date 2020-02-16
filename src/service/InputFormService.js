import BaseService from "./BaseService";

class InputFormService extends BaseService {
  insertData(data) {
    const options = {
      method: "POST",
      body: JSON.stringify({ ...data })
    };
    return this.fetch("api/guestbook", options);
  }
}

export default InputFormService;