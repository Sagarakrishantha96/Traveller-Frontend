// User details returned by the API (never includes the password)
export interface UserModel {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  role?: "User" | "Admin";      // missing for logins saved before roles existed
  createdAt: string;
}
