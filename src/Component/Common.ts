import axios from "axios";

// Change the port to match your .NET API
export function getHost(): string {
  return "https://localhost:51453/";
}

// Turns an API error into a message the user can read
export function getErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError(error)) {
    // No response means the server couldn't be reached
    if (!error.response) return "Cannot connect to the server. Is the API running?";
    if (typeof error.response.data === "string" && error.response.data !== "") return error.response.data;
  }
  return fallback;
}
