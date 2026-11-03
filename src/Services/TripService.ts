import axios from "axios";
import { TripPlanRequestModel, TripPlanModel } from "../Models/TripPlanModel";
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
