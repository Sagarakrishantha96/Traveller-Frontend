import { PlaceModel } from "./PlaceModel";
import { AttractionModel } from "./AttractionModel";
import { StayModel } from "./StayModel";

// Body of POST api/trips/plan
export interface TripPlanRequestModel {
  fromPlaceId: number;
  toPlaceId: number;
  days: number;
  startDate: string;              // "yyyy-MM-dd"
}

// One bus or train ride
export interface RouteLegModel {
  mode: string;                   // Bus / Train
  routeNumber: string;
  routeName: string;
  operator: string;
  isAc: boolean;
  fromPlace: string;
  toPlace: string;
  departureTime: string;          // "HH:mm"
  arrivalTime: string;
  durationMinutes: number;
  fare: number | null;
}

// A way to get from A to B - one leg, or two with a change
export interface RouteOptionModel {
  legs: RouteLegModel[];
  departureTime: string;
  arrivalTime: string;
  durationMinutes: number;
  fare: number | null;
  changes: number;
}

export interface TripItemModel {
  type: "Travel" | "Attraction" | "Return";
  startTime: string;
  endTime: string;
  title: string;
  note: string | null;
  travelMinutes: number;          // getting here from the previous stop
  attraction: AttractionModel | null;
  route: RouteOptionModel | null;
}

export interface TripDayModel {
  dayNumber: number;
  date: string;
  title: string;
  items: TripItemModel[];
  stay: StayModel | null;         // null on the last day
  otherStays: StayModel[];
}

// Response of POST api/trips/plan
export interface TripPlanModel {
  from: PlaceModel;
  to: PlaceModel;
  numberOfDays: number;
  startDate: string;
  coverImageUrl: string | null;
  outbound: RouteOptionModel | null;  // null = no bus/train, go by car
  return: RouteOptionModel | null;
  car: { distanceKm: number; durationMinutes: number };
  days: TripDayModel[];
  estimatedCost: { transport: number; tickets: number; stays: number; total: number };
}
