import axios from 'axios';

const token = "ZDJiZmI4YjUtZTljNi00ZGFmLTlmMzUtM2M5ZTA2OGVhNTM3";

export default axios.create({
  baseURL: 'https://api.m3o.com/v1/user',
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  }
});
