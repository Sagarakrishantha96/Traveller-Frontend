import axios from "axios";
import { RegisterModel } from "../Models/RegisterModel";
import { LoginModel } from "../Models/LoginModel";
import { LoginResponseModel } from "../Models/LoginResponseModel";
import { UserModel } from "../Models/UserModel";
import { getHost } from "../Component/Common";

const apiBaseUrl = getHost() + "api/";

export async function postRegisterRequest(registerModel: RegisterModel) {
    return new Promise<UserModel>((resolve, reject) => {
        axios
        .post(apiBaseUrl + "auth/register", registerModel)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export async function postLoginRequest(loginModel: LoginModel) {
    return new Promise<LoginResponseModel>((resolve, reject) => {
        axios
        .post(apiBaseUrl + "auth/login", loginModel)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

// Keep the login token and user in the browser, so the user stays logged in
export function saveLogin(login: LoginResponseModel) {
    localStorage.setItem("token", login.token);
    localStorage.setItem("tokenExpiresAt", login.expiresAt);
    localStorage.setItem("user", JSON.stringify(login.user));
}

// The logged-in user, or null if not logged in or the login has expired
export function getLoggedInUser(): UserModel | null {
    const user = localStorage.getItem("user");
    if (!localStorage.getItem("token") || !user) return null;

    const expiresAt = localStorage.getItem("tokenExpiresAt");
    if (expiresAt && new Date(expiresAt).getTime() <= Date.now()) {
        logout();
        return null;
    }

    return JSON.parse(user);
}

export function getToken(): string | null {
    return getLoggedInUser() ? localStorage.getItem("token") : null;
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiresAt");
    localStorage.removeItem("user");
}
