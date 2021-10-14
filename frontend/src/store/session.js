import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const SET_NOTE = 'session/setNote';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const setNote = (noteId) => {
  return {
    type: SET_NOTE,
    payload: noteId
  };
}

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

// NOTES
export const grabNote = (noteId) => async dispatch => {
  const response = await csrfFetch(`/api/note/${noteId}`);
  const data = await response.json();
  console.log('HELLO FROM grabNote():', data);
  dispatch(setNote(data.content));
  return response;
};

export const newNote = (note) => async (dispatch) => {
  const {title,content} = note;
  const response = await csrfFetch("/api/note", {
    method: "POST",
    body: JSON.stringify({
      title,
      content
    }),
  });
  const data = await response.json();
  dispatch(setNote(data.noteId));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case SET_NOTE:
      newState = Object.assign({}, state);
      newState.noteId = action.payload;
    default:
      return state;
  }
};

export default sessionReducer;
