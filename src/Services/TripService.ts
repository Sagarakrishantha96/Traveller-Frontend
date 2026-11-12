import axios from "axios";
import { TripPlanRequestModel, TripPlanModel } from "../Models/TripPlanModel";
import { SavedTripModel, TripSummaryModel } from "../Models/SavedTripModel";
import { getHost } from "../Component/Common";

const apiBaseUrl = getHost() + "api/";

export async function postTripPlan(tripPlanRequest: TripPlanRequestModel) {
    return new Promise<TripPlanModel>((resolve, reject) => {
        axios
        .post(apiBaseUrl + "trips/plan", tripPlanRequest)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function postSaveTrip(tripPlanRequest: TripPlanRequestModel) {
    return new Promise<TripSummaryModel>((resolve, reject) => {
        axios
        .post(apiBaseUrl + "trips", tripPlanRequest)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function getMyTrips() {
    return new Promise<TripSummaryModel[]>((resolve, reject) => {
        axios
        .get(apiBaseUrl + "trips")
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function getSavedTrip(tripId: number) {
    return new Promise<SavedTripModel>((resolve, reject) => {
        axios
        .get(apiBaseUrl + "trips/" + tripId)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function deleteTrip(tripId: number) {
    return new Promise<void>((resolve, reject) => {
        axios
        .delete(apiBaseUrl + "trips/" + tripId)
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        })
    });
}
