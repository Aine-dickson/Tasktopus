// api.js

import axios from 'axios';

// Create a new instance of Axios with custom configurations
const api = axios.create({
  baseURL: 'http://localhost/api/v1/',
  timeout: 5000,
});

export default api;
