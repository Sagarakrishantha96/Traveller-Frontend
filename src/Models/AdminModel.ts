// Types for the admin page (api/admin/...)

export interface AdminSummaryModel {
  places: number;
  attractions: number;
  stays: number;
  routes: number;
  users: number;
  trips: number;
}

// Allowed values for the dropdowns, from GET api/admin/options
export interface AdminOptionsModel {
  attractionCategories: string[];
  stayTypes: string[];
  routeModes: string[];
  routeOperators: string[];
}

export interface AdminRouteStopModel {
  placeId: number;
  placeName: string;
  stopOrder: number;
  minutesFromStart: number;
}

export interface AdminRouteModel {
  id: number;
  mode: string;
  routeNumber: string;
  name: string;
  operator: string;
  isAc: boolean;
  fare: number | null;
  durationMinutes: number;
  departureTimes: string;         // "05:30,07:00"
  stops: AdminRouteStopModel[];
}

// The four kinds of data the admin page manages
export type AdminTab = "places" | "attractions" | "stays" | "routes";

// Request bodies are plain objects built from the form (see adminConfig.ts)
export type AdminRequestModel = Record<string, unknown>;
