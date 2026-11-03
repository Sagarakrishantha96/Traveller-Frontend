// A hotel, villa or homestay from GET api/stays/nearby
export interface StayModel {
  id: number;
  placeId: number;
  placeName: string;
  name: string;
  type: string;
  pricePerNight: number;
  rating: number | null;
  address: string | null;
  phone: string | null;
  bookingUrl: string | null;
  imageUrl: string | null;
  latitude: number;
  longitude: number;
  distanceKm: number;
}

export const StayTypes = ["Hotel", "Villa", "Homestay", "Guesthouse", "Resort"] as const;
