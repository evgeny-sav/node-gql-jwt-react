import axios from 'axios';
import config from '../../configs/config';

const API_KEY = process.env.API_KEY;
const API_URL = config.API_URL;

export const getMovies = async (
  query,
  adult = false,
  page = 1,
  lang = 'en-US'
) => {
  return await axios.get(
    `${API_URL}search/movie?api_key=${API_KEY}&language=${lang}&query=${query}&page=${page}&include_adult=${adult}`
  );
};

export const getMovie = async (id, lang = 'en-US') => {
  return await axios.get(
    `${API_URL}movie/${id}?api_key=${API_KEY}&language=${lang}`
  );
};
