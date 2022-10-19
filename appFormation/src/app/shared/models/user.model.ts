import { RoleUser } from "../enums/role-user";
import { UserI } from "../interfaces/user-i";

export class User implements UserI{
  id: number | undefined;
  login: string | undefined;
  password: string | undefined;
  lastConexion: Date = new Date();
  role: RoleUser = RoleUser.USER;

  constructor(obj?: Partial<User>) {
    if (obj) Object.assign(this, obj);
  }
}
