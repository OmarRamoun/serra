import axios from 'axios';


const baseURL = "https://api.m3o.com/v1/user";
const token = "ZDJiZmI4YjUtZTljNi00ZGFmLTlmMzUtM2M5ZTA2OGVhNTM3";

export const LOGIN_URL = "/login";
export const LOGOUT_URL = "/logout";
export const READ_URL = "/read";
export const REGISTER_URL = "/create";

export default axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  }
});
