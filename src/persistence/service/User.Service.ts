import {Injectable} from "@/persistence/injection/ModuleManager";

interface UserInfoInterface {
  username?: string;
  gender?: string;
  token?: string;
}

interface SessionInterface {
  loggedIn: boolean;
}

@Injectable()
export default class UserService {
  private userInfo: UserInfoInterface | null;
  private session: SessionInterface = {
    loggedIn: false,
  };

  constructor() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')) || null;
  }

  public setUserInfo(user: UserInfoInterface): UserService {
    this.userInfo = user;
    return this;
  }

  public getUserInfo(): UserInfoInterface {
    return this.userInfo;
  }

  public setloginStatus(loggedIn: boolean, token?: string): UserService {
    this.session.loggedIn = loggedIn;
    this.userInfo.token = token || '';
    return this;
  }

  public getLoginStatus(): SessionInterface {
    return this.session;
  }

  public getAuthInfo() {
    return this.session.loggedIn ? {username: this.userInfo.username, token: this.userInfo.token} : null;
  }

}
