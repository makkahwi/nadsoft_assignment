import axios from "axios";

export const baseURL = process.env.REACT_APP_BACKEND_URL || "https://api.covid19api.com";

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
    return response.data;
  },
  error => {
    const e = String(error);

    if (e.includes("401") || e.includes("403")) {
      console.log("Error", e);
      // store.dispatch(logout());
      // window.location.href = ("/")
      // store.dispatch(addNotification({ error: true, action: "Executed", message: i18n.t("This is Unauthorized Access") }));
      // return Promise.reject("Your session has expired. Please sign in again to continue.");
    }
  }
);

export default service;
