// A town or city from GET api/places
export interface PlaceModel {
  id: number;
  name: string;
  district: string | null;
  latitude: number;
  longitude: number;
}
