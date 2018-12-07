import { getMovies, getMovie } from '../../api/movies';

const movieQueries = {
  movies: async (root, { query }) => {
    try {
      const {
        data: { results },
      } = await getMovies(query);
      return results;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  movie: async (root, { id }) => {
    try {
      const { data } = await getMovie(id);
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default movieQueries;
