import constants from '../constants';

export const setSearchFilterStarted = () => ({
  type: constants.SET_SEARCH_FILTER_STARTED,
});

export const setSearchFilterError = e => ({
  type: constants.SET_SEARCH_FILTER_ERROR,
  payload: e,
});

export const setSearchFilterCompleted = payload => ({
  type: constants.SET_SEARCH_FILTER_COMPLETED,
  payload,
});

export const setSearchFilter = filter => async dispatch => {
  dispatch(setSearchFilterStarted());
  try {
    dispatch(setSearchFilterCompleted(filter));
  } catch (e) {
    dispatch(setSearchFilterError(e));
  }
};

export default setSearchFilter;
