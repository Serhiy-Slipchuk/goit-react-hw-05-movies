import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const searchParams = {
  api_key: '53cf71a9dc9d51d5f353ddcd73e301a4',
  language: 'en-US',
};

export const getPopularMovies = async function () {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: searchParams,
  });
  return response;
};

export const getMoviesBySearchQuerry = async function (query) {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query, ...searchParams },
  });
  return response;
};
