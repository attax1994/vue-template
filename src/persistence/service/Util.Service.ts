import {Injectable} from "@/persistence/injection/ModuleManager";

@Injectable()
export default class UtilService {
  /**
   * 根据Param Object生成queryParam
   * @param {Object} params
   * @return {string}
   */
  public static generateQueryParam(params: Object) {
    let temp = '?';
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        temp += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`;
      }
    }
    return temp === '?' ? '' : temp.slice(0, -1);
  }
}