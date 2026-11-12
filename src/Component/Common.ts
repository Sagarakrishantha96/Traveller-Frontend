import axios from "axios";

// Change the port to match your .NET API
export function getHost(): string {
  return "https://localhost:51453/";
}

// Shows an amount in Sri Lankan rupees, e.g. "LKR 12,500"
export function formatPrice(amount: number): string {
  return "LKR " + amount.toLocaleString("en-LK", { maximumFractionDigits: 0 });
}

// Shows minutes as "4 h 15 min"
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}

// Shows "2026-11-10" as "Tue, 10 Nov"
export function formatDate(date: string): string {
  return new Date(date + "T00:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
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
