import constants from '../constants';

const actions = {
  [constants.SET_SEARCH_FILTER_STARTED]: state => state,
  [constants.SET_SEARCH_FILTER_ERROR]: (state, action) => {
    throw Error(action.payload.message);
  },
  [constants.SET_SEARCH_FILTER_COMPLETED]: (state, action) => {
    return action.payload;
  },
};

export const searchFilterReducers = (state = [], action) =>
  actions[action.type] ? actions[action.type](state, action) : state;
