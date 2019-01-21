import axios from 'axios';
import config from '../../configs/config';

const API_KEY = process.env.API_KEY;
const API_URL = config.API_URL;

// https://api.themoviedb.org/3/search/person?api_key=2dbb191a226476d26c943d4227f6bee1&language=en-US&query=johnny%20depp&page=1&include_adult=false
export const getPersons = async (
  query,
  adult = false,
  page = 1,
  lang = 'en-US'
) => {
  return await axios.get(
    `${API_URL}search/person?api_key=${API_KEY}&language=${lang}&query=${encodeURI(
      query
    )}&page=${page}&include_adult=${adult}`
  );
};

// https://api.themoviedb.org/3/person/85?api_key=2dbb191a226476d26c943d4227f6bee1&language=en-US&append_to_response=movie_credits
export const getPerson = async (id, lang = 'en-US') => {
  return await axios.get(
    `${API_URL}person/${id}?api_key=${API_KEY}&language=${lang}&append_to_response=movie_credits`
  );
};
