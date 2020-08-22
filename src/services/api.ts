import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;

// base url image = http://image.tmdb.org/t/p/w185
