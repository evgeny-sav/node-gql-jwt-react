import constants from '../constants';

const initialState = {
  email: '',
  name: '',
  username: '',
  phone: '',
  website: '',
  messages: [],
};

const actions = {
  [constants.FETCH_USER_STARTED]: state => state,
  [constants.FETCH_USER_COMPLETED]: (state, action) => action.payload.data.user,
  [constants.FETCH_USER_ERROR]: (state, action) => action.payload,
};

const singleUserReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default singleUserReducer;
