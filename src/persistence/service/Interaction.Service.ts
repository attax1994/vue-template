import {Injectable} from "@/persistence/injection/ModuleManager";

@Injectable()
export default class InteractionService {
  /**
   * 平滑滚动，不支持的情况下改为直接滚动
   * @param {number} left
   * @param {number} top
   */
  public static scroll(left: number, top: number) {
    try {
      window.scroll({left: left, top: top, behavior: 'smooth'});
    } catch (e) {
      window.scroll(0, 0);
    }
  }
}