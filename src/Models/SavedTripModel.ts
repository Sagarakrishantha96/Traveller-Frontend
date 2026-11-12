import { TripPlanModel } from "./TripPlanModel";

export type TripStatus = "Upcoming" | "Ongoing" | "Completed";

// A saved trip in the My Trips list (GET api/trips)
export interface TripSummaryModel {
  id: number;
  title: string;
  fromPlace: string;
  toPlace: string;
  numberOfDays: number;
  startDate: string;              // "yyyy-MM-dd"
  endDate: string;
  status: TripStatus;
  estimatedCost: number | null;
  attractionCount: number;
  coverImageUrl: string | null;
  savedAt: string;
}

// A saved trip opened in full (GET api/trips/{id}) - a plan plus its id
export interface SavedTripModel extends TripPlanModel {
  id: number;
  title: string;
  status: TripStatus;
  savedAt: string;
}
