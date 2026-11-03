// An attraction from GET api/attractions/nearby
export interface AttractionModel {
  id: number;
  placeId: number;
  placeName: string;
  name: string;
  description: string | null;
  category: string;
  visitHours: number;
  openTime: string | null;   // "HH:mm", null = open all day
  closeTime: string | null;
  ticketPrice: number | null;
  rating: number | null;
  latitude: number;
  longitude: number;
  imageUrl: string | null;
  distanceKm: number;
}
