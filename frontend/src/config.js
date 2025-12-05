require('dotenv').config();   //{ path: '../.env' } Use This For Local Dev.

const API_URL = process.env.VITE_API_URL;

export default API_URL;
