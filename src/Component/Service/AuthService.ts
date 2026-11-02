import { getHost } from "../Common";

const apiBaseUrl = getHost() + "api/";

export interface RegisterRequest {
  fullName: string;
  email: string;
  phone: string | null;
  password: string;
}

export async function postRegisterRequest(register: RegisterRequest) {
  const response = await fetch(apiBaseUrl + "auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(register)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Registration failed. Please try again.");
  }

  return response;
}
