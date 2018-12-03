import constants from '../constants';
import UserService from '../services/userService';

export const fetchUserStarted = () => ({
  type: constants.FETCH_USER_STARTED,
});

export const fetchUserCompleted = payload => ({
  type: constants.FETCH_USER_COMPLETED,
  payload,
});

export const fetchUserError = e => ({
  type: constants.FETCH_USER_ERROR,
  payload: e,
});

export const fetchUser = id => async dispatch => {
  dispatch(fetchUserStarted());
  try {
    const payload = await UserService.getUserById(id);
    dispatch(fetchUserCompleted(payload.data));
  } catch (e) {
    dispatch(fetchUserError(e));
    throw Error(e.message);
  }
};

export default fetchUser;
