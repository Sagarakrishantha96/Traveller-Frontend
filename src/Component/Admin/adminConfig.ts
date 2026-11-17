import { AdminOptionsModel, AdminRequestModel, AdminTab } from "../../Models/AdminModel";
import { formatPrice } from "../Common";

// Describes each admin tab: its form fields, table columns and wording.
// The page and components are generic; adding a field only needs a change here.

export type FieldType = "text" | "number" | "textarea" | "select" | "time" | "checkbox" | "place";

export interface FieldConfig {
  name: string;                       // same name as the API request property
  label: string;
  type: FieldType;
  required?: boolean;
  options?: keyof AdminOptionsModel;  // for "select"
  placeholder?: string;
  step?: string;                      // for "number"
  wide?: boolean;                     // takes the full form width
}

export interface ColumnConfig {
  label: string;
  value: (row: any) => string;
  image?: (row: any) => string | null;  // shows a thumbnail instead of text
}

export interface TabConfig {
  tab: AdminTab;
  label: string;
  icon: string;
  singular: string;
  hasPlaceFilter: boolean;
  deleteWarning: string;
  fields: FieldConfig[];
  columns: ColumnConfig[];
  searchText: (row: any) => string;
}

const location: FieldConfig[] = [
  { name: "latitude", label: "Latitude", type: "number", required: true, step: "0.000001", placeholder: "7.957000" },
  { name: "longitude", label: "Longitude", type: "number", required: true, step: "0.000001", placeholder: "80.760300" }
];

const rating = (value: number | null) => (value === null ? "–" : `★ ${value}`);

export const tabs: TabConfig[] = [
  {
    tab: "places",
    label: "Places",
    icon: "📍",
    singular: "place",
    hasPlaceFilter: false,
    deleteWarning: "A place can only be deleted when it has no attractions, stays or route stops.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Sigiriya" },
      { name: "district", label: "District", type: "text", placeholder: "Matale" },
      ...location
    ],
    columns: [
      { label: "Photo", value: () => "", image: (r) => r.imageUrl },
      { label: "Name", value: (r) => r.name },
      { label: "District", value: (r) => r.district ?? "–" },
      { label: "Location", value: (r) => `${Number(r.latitude).toFixed(4)}, ${Number(r.longitude).toFixed(4)}` },
      { label: "Attractions", value: (r) => String(r.attractionCount) }
    ],
    searchText: (r) => `${r.name} ${r.district ?? ""}`
  },
  {
    tab: "attractions",
    label: "Attractions",
    icon: "🏛️",
    singular: "attraction",
    hasPlaceFilter: true,
    deleteWarning: "Saved trips that include it will keep the day but lose this visit.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Sigiriya Rock Fortress" },
      { name: "placeId", label: "Place", type: "place", required: true },
      { name: "category", label: "Category", type: "select", required: true, options: "attractionCategories" },
      { name: "visitHours", label: "Visit hours", type: "number", required: true, step: "0.25", placeholder: "2" },
      { name: "openTime", label: "Opens", type: "time" },
      { name: "closeTime", label: "Closes", type: "time" },
      { name: "ticketPrice", label: "Ticket price (LKR)", type: "number", step: "1", placeholder: "0 = free" },
      { name: "rating", label: "Rating (0-5)", type: "number", step: "0.1", placeholder: "4.5" },
      ...location,
      { name: "imageUrl", label: "Image URL", type: "text", wide: true, placeholder: "https://..." },
      { name: "description", label: "Description", type: "textarea", wide: true }
    ],
    columns: [
      { label: "Photo", value: () => "", image: (r) => r.imageUrl },
      { label: "Name", value: (r) => r.name },
      { label: "Place", value: (r) => r.placeName },
      { label: "Category", value: (r) => r.category },
      { label: "Rating", value: (r) => rating(r.rating) },
      { label: "Ticket", value: (r) => (r.ticketPrice === null ? "–" : r.ticketPrice === 0 ? "Free" : formatPrice(r.ticketPrice)) }
    ],
    searchText: (r) => `${r.name} ${r.placeName} ${r.category}`
  },
  {
    tab: "stays",
    label: "Stays",
    icon: "🏨",
    singular: "stay",
    hasPlaceFilter: true,
    deleteWarning: "Saved trips that use it will keep the night but lose this stay.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Rock View Homestay" },
      { name: "placeId", label: "Place", type: "place", required: true },
      { name: "type", label: "Type", type: "select", required: true, options: "stayTypes" },
      { name: "pricePerNight", label: "Price per night (LKR)", type: "number", required: true, step: "1" },
      { name: "rating", label: "Rating (0-5)", type: "number", step: "0.1" },
      { name: "phone", label: "Phone", type: "text", placeholder: "+94..." },
      { name: "address", label: "Address", type: "text", wide: true },
      ...location,
      { name: "bookingUrl", label: "Booking URL", type: "text", wide: true, placeholder: "https://..." },
      { name: "imageUrl", label: "Image URL", type: "text", wide: true, placeholder: "https://..." }
    ],
    columns: [
      { label: "Photo", value: () => "", image: (r) => r.imageUrl },
      { label: "Name", value: (r) => r.name },
      { label: "Place", value: (r) => r.placeName },
      { label: "Type", value: (r) => r.type },
      { label: "Price / night", value: (r) => formatPrice(r.pricePerNight) },
      { label: "Rating", value: (r) => rating(r.rating) }
    ],
    searchText: (r) => `${r.name} ${r.placeName} ${r.type}`
  },
  {
    tab: "routes",
    label: "Routes",
    icon: "🚌",
    singular: "route",
    hasPlaceFilter: false,
    deleteWarning: "Saved trips that use it will keep the ride but without its bus/train details.",
    fields: [
      { name: "mode", label: "Mode", type: "select", required: true, options: "routeModes" },
      { name: "routeNumber", label: "Route number", type: "text", required: true, placeholder: "48" },
      { name: "name", label: "Name", type: "text", required: true, wide: true, placeholder: "Colombo - Polonnaruwa" },
      { name: "operator", label: "Operator", type: "select", required: true, options: "routeOperators" },
      { name: "fare", label: "Full fare (LKR)", type: "number", step: "1" },
      { name: "durationMinutes", label: "Total minutes", type: "number", required: true, step: "1" },
      { name: "isAc", label: "Air conditioned", type: "checkbox" },
      { name: "departureTimes", label: "Departure times from the first stop", type: "text", required: true, wide: true, placeholder: "05:30,07:00,09:15" }
    ],
    columns: [
      { label: "Route", value: (r) => `${r.mode === "Train" ? "🚆" : "🚌"} ${r.routeNumber}${r.isAc ? " AC" : ""}` },
      { label: "Name", value: (r) => r.name },
      { label: "Stops", value: (r) => r.stops.map((s: any) => s.placeName).join(" → ") },
      { label: "Departures", value: (r) => r.departureTimes.split(",").join(", ") },
      { label: "Fare", value: (r) => (r.fare === null ? "–" : formatPrice(r.fare)) }
    ],
    searchText: (r) => `${r.routeNumber} ${r.name} ${r.operator} ${r.stops.map((s: any) => s.placeName).join(" ")}`
  }
];

export type FormValues = Record<string, string | boolean>;

// Item from the API -> values for the form inputs
export function toFormValues(fields: FieldConfig[], item: any | null): FormValues {
  const values: FormValues = {};
  fields.forEach((f) => {
    const value = item?.[f.name];
    if (f.type === "checkbox") values[f.name] = Boolean(value);
    else values[f.name] = value === null || value === undefined ? "" : String(value);
  });
  return values;
}

// Form values -> API request body (empty optional fields are sent as null)
export function toRequest(fields: FieldConfig[], values: FormValues): AdminRequestModel {
  const request: AdminRequestModel = {};
  fields.forEach((f) => {
    const value = values[f.name];
    if (f.type === "checkbox") request[f.name] = Boolean(value);
    else if (f.type === "number" || f.type === "place") request[f.name] = value === "" ? null : Number(value);
    else request[f.name] = typeof value === "string" && value.trim() !== "" ? value.trim() : f.required ? "" : null;
  });
  return request;
}
