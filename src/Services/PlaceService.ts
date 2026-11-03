import axios from "axios";
import { PlaceModel } from "../Models/PlaceModel";
import { AttractionModel } from "../Models/AttractionModel";
import { StayModel } from "../Models/StayModel";
import { getHost } from "../Component/Common";

const apiBaseUrl = getHost() + "api/";

export async function getPlaces(query?: string) {
    return new Promise<PlaceModel[]>((resolve, reject) => {
        axios
        .get(apiBaseUrl + "places", { params: { q: query } })
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function getNearbyAttractions(latitude: number, longitude: number, radiusKm: number) {
    return new Promise<AttractionModel[]>((resolve, reject) => {
        axios
        .get(apiBaseUrl + "attractions/nearby", { params: { lat: latitude, lng: longitude, radiusKm } })
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function getNearbyStays(latitude: number, longitude: number, radiusKm: number, type?: string, maxPrice?: number) {
    return new Promise<StayModel[]>((resolve, reject) => {
        axios
        .get(apiBaseUrl + "stays/nearby", { params: { lat: latitude, lng: longitude, radiusKm, type, maxPrice } })
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}
