import { UserModel } from "./UserModel";

// Response of POST api/auth/login
export interface LoginResponseModel {
  token: string;
  expiresAt: string;
  user: UserModel;
}
