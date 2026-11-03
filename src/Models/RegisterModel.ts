// Body of POST api/auth/register
export interface RegisterModel {
  fullName: string;
  email: string;
  phone: string | null;
  password: string;
}
