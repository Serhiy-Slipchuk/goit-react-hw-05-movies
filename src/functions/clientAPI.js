import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const searchParams = {
  api_key: '53cf71a9dc9d51d5f353ddcd73e301a4',
  language: 'en-US',
};

export const getPopularMovies = async function () {
  const response = await axios(`${BASE_URL}/trending/movie/day`, {
    params: searchParams,
  });
  return response;
};

export const getMoviesBySearchQuerry = async function (query) {
  const response = await axios(`${BASE_URL}/search/movie`, {
    params: { query, ...searchParams },
  });
  return response;
};

export const getMovieDetails = async function (movieId) {
    const response = await axios(`${BASE_URL}/movie/${movieId}`, {params: {movieId, ...searchParams}});
    return response;
}

export const getMovieReviews = async function (movieId) {
    const response = await axios(`${BASE_URL}/movie/${movieId}/reviews`, {params: {movieId, ...searchParams}});
    return response;
}

export const getMovieCast = async function (movieId) {
    const response = await axios(`${BASE_URL}/movie/${movieId}/credits`, {params: {movieId, ...searchParams}});
    return response;
}
