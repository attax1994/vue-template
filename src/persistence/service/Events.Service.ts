import {Injectable} from "@/persistence/injection/ModuleManager";

@Injectable()
export default class EventsService {
  private _events: any = {};

  constructor() {
  }

  on(type: string, handler: Function) {
    let handlers = this._events[type];

    if (!handlers) {
      handlers = this._events[type] = [];
    }

    handlers.push({
      name: handler.name || 'anonymous',
      fn: handler,
    });
  }

  emit(type: string, data: any) {
    const handlers = this._events[type];

    if (handlers) {
      for (let handler of handlers) {
        handler.fn(data);
      }
    }
  }

  remove(type: string, name: string = 'anonymous') {
    if (this._events[type]) {
      this._events[type] = this._events[type].filter((value: any) => {
        return value.name !== name;
      });
      return true;
    } else {
      return false;
    }
  }

}