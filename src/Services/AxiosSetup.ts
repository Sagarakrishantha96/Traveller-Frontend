import axios from "axios";
import { getToken, logout } from "./AuthService";

// Runs once at start-up (imported in main.jsx) and applies to every axios call

// Send the login token with every request
axios.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// If the server says the login is no longer valid, log out and go to the login page.
// Login/register failures also return 401, so those are left for the form to show.
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const isAuthCall = error.config?.url?.includes("/auth/");
        if (error.response?.status === 401 && !isAuthCall) {
            logout();
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
