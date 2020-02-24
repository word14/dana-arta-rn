import BaseService from "./BaseService";

export default class BranchService extends BaseService {
    getBranch() {
        const options = {
            method: "GET"
        };
        return this.fetch("api/cabang", options);
    }
}