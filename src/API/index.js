import axios from "axios";
import { countriesTestData, globalTestData } from "../Helpers/mockData"

export const baseURL = process.env.REACT_APP_BACKEND_URL || "https://api.covid19api.com";

export const mockStatus = false;

const mockData = { Global: globalTestData, Countries: countriesTestData };

const service = axios.create({
  baseURL,
});

// service.interceptors.request.use(
//   config => {
//     const { token } = store.getState().auth;

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   }
// );

service.interceptors.response.use(
  response => {
    if (mockStatus) {
      return mockData
    } else {
      return response.data;
    }
  },
  error => {
    if (mockStatus) {
      return mockData
    } else {
      const e = String(error);

      if (e.includes("401") || e.includes("403")) {
        console.log("Error", e);
        // store.dispatch(logout());
        // window.location.href = ("/")
        // store.dispatch(addNotification({ error: true, action: "Executed", message: i18n.t("This is Unauthorized Access") }));
        // return Promise.reject("Your session has expired. Please sign in again to continue.");
      }
    }
  }
);

export default service;
