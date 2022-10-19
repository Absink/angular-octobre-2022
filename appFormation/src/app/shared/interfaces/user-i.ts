import { RoleUser } from "../enums/role-user";

export interface UserI {
  id: number | undefined;
  login: string | undefined;
  password: string | undefined;
  lastConexion: Date;
  role: RoleUser;
}

