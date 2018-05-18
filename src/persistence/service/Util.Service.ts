import {Injectable} from '@/persistence/injection/ModuleManager'

@Injectable()
export default class UtilService {
  /**
   * 根据Param Object生成queryParam
   * @param {Object} params
   * @return {string}
   */
  public static generateQueryParam(params: Object) {
    let temp = '?'
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        temp += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`
      }
    }
    return temp === '?' ? '' : temp.slice(0, -1)
  }

  /**
   * 生成一个随机的key，用于在没有id作为key时候，v-for的key优化
   * @param {string} suffix
   * @return {string}
   */
  public static generateRandomKey(suffix: string = '') {
    return `${suffix}-${Math.floor(1000 * Math.random())}`
  }

  /**
   * 浅度拷贝一个对象
   * @param {Object} source
   * @return {{}}
   */
  public static shallowClone(source: Object) {
    let temp = {}
    for (const key in source) {
      if (source.hasOwnProperty(key)) temp[key] = source[key]
    }
    return temp
  }

  /**
   * 深度拷贝一个对象
   * @param {Object} source
   * @return {{}}
   */
  public static deepClone(source: any) {
    if (!(source instanceof Object)) {
      return source
    }

    let objectClone
    const Constructor = source.constructor
    switch (Constructor) {
      case RegExp:
        objectClone = new Constructor(source)
        break
      case Date:
        objectClone = new Constructor(source.getTime())
        break
      default:
        objectClone = new Constructor()
    }

    for (const prop in source) {
      if (source.hasOwnProperty(prop)) objectClone[prop] = UtilService.deepClone(source[prop])
    }

    return objectClone
  }

  /**
   * 检查是否有空属性，只检查一层
   * @param {Object} source
   * @return {{}}
   */
  public static hasEmptyProperty(source: Object) {
    let hasEmpty = false
    for (const key in source) {
      if (source.hasOwnProperty(key) && !source[key]) {
        hasEmpty = true
        break
      }
    }
    return hasEmpty
  }

  /**
   * 清除空属性，只检查一层
   * @param {Object} source
   * @return {{}}
   */
  public static eraseEmptyProperty(source: Object) {
    const temp = UtilService.shallowClone(source)
    for (const key in temp) {
      if (temp.hasOwnProperty(key) && !temp[key]) {
        delete temp[key]
      }
    }
    return temp
  }
}