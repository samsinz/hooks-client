import axios from "axios";
console.log(import.meta.env.VITE_BACKEND_URL);
const apiHandler = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

apiHandler.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

//! Error handling to use in the catch
function errorHandler(error) {
  if (error.data) {
    console.log(error.data && error.data.message);
    throw error;
  }
  throw error;
}

// apiHandler.signup = (userInfo) => {
// 	return apiHandler
// 		.post("/api/auth/signup")
// 		.then((res) => res.data)
// 		.catch(errorHandler)
// }

const service = {
  // Service is spread to have access to the basics get/post...
  ...apiHandler,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  isLoggedIn() {
    return service
      .get("/api/auth/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  login(userInfo) {
    return service
      .post("/api/auth/login", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  toggleFavorite(userInfo){
    return service
    .post("/api/toggleFavorite", userInfo)
    .then((res) => res.data)
    .catch(errorHandler);
  },

  deleteHook(userInfo){
    const {hookId, partnerId} = userInfo;
    return service
    .delete(`/api/partners/${partnerId}/delete/${hookId}`)
    .then((res) => res.data)
    .catch(errorHandler);
  },

  deletePartner(userInfo){
    const {partnerId} = userInfo;
    return service
    .delete(`/api/partners/${partnerId}/delete`, userInfo)
    .then((res) => res.data)
    .catch(errorHandler);
  },

  editPartner(userInfo){
    const {partnerId} = userInfo;
    return service
    .post(`/api/partners/${partnerId}/edit`, userInfo)
    .then((res) => res.data)
    .catch(errorHandler);
  },

  // getAllTheCats() {
  // 	return service
  // 		.get("/api/cats")
  // 		.then((res) => res.data)
  // 		.catch(errorHandler);
  // },

  addHook(userInfo) {
    return service
      .post("/api/partners/create", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

// export default apiHandler

export default service;
