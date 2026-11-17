import axios from "axios";
import { AdminOptionsModel, AdminRequestModel, AdminSummaryModel, AdminTab } from "../Models/AdminModel";
import { getHost } from "../Component/Common";

const apiBaseUrl = getHost() + "api/admin/";

export async function getAdminSummary() {
    return new Promise<AdminSummaryModel>((resolve, reject) => {
        axios
        .get(apiBaseUrl + "summary")
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function getAdminOptions() {
    return new Promise<AdminOptionsModel>((resolve, reject) => {
        axios
        .get(apiBaseUrl + "options")
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

// The list for one tab: places, attractions, stays or routes
export async function getAdminItems<T>(tab: AdminTab) {
    return new Promise<T[]>((resolve, reject) => {
        axios
        .get(apiBaseUrl + tab)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

// Adds a new item, or updates it when an id is given
export async function saveAdminItem<T>(tab: AdminTab, id: number | null, item: AdminRequestModel) {
    return new Promise<T>((resolve, reject) => {
        const request = id === null
            ? axios.post(apiBaseUrl + tab, item)
            : axios.put(apiBaseUrl + tab + "/" + id, item);
        request
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function deleteAdminItem(tab: AdminTab, id: number) {
    return new Promise<void>((resolve, reject) => {
        axios
        .delete(apiBaseUrl + tab + "/" + id)
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        })
    });
}
