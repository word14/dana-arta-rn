import config from "~/config/config";
import { AsyncStorage } from "react-native";

class BaseService {
  constructor(presenter) {
    this.presenter = presenter;
  }

  async fetch(url, options, authenticate = false) {
    options         = await this.getHeader(options, authenticate);
    const response  = await fetch(`${config.baseUrl}${url}`, options);
    if(response.status == 200) {
      const json = await response.json();
      if(json) {
        return json;
      }
      throw json;
    }
  }

  async getHeader(options, authenticate) {
    if(!options.headers) {
      options.headers  = {};
    }
    options.headers["App-Key"]      = config.appKey;
    options.headers["Channel-Id"]   = config.channelId;
    options.headers["Content-Type"] = "application/json";
    options.headers["Cookie"] = "ci_session=45vviomtagm2t2mv6kudcvacsm1lqhfq";
    options.headers["Accept"] = "application/json";
    if(authenticate) {
      const accessToken = await AsyncStorage.getItem("access_token");
      options.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return options;
  }
  
}

export default BaseService;