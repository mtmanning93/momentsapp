import axios from "axios";

axios.defaults.baseURL = 'https://drf-apii-eb74b6f7eea1.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

export const axiosRes = axios.create();
export const axiosReq = axios.create();