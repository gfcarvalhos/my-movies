import axios from 'axios';
const API_KEY = '449653957746f8f875984c9104873fdf';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;
export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl('movie/popular'));
  }
}
