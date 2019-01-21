import { getPersons, getPerson } from '../../api/persons';

const movieQueries = {
  persons: async (root, { query }) => {
    try {
      const {
        data: { results },
      } = await getPersons(query);
      return results;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  person: async (root, { id }) => {
    try {
      const { data } = await getPerson(id);
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

export default movieQueries;
