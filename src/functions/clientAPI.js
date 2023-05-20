import axios from "axios";

export const getPopularMovies = async function() {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
    const searchParams = {
        api_key: '53cf71a9dc9d51d5f353ddcd73e301a4',
        language: 'en-US'

    }
const response = await axios.get(BASE_URL, {params: searchParams})

return response
}