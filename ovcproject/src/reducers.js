import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_POSTS,
  REQUEST_ROBOTS_POSTS_SUCCESS,
  REQUEST_ROBOTS_POSTS_FAILED
} from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchRobots = (
  state = initialStateSearch, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: payload }
    default:
      return state
  }
}

const initialStateRobots = {
  robots: [],
  isPending: true,
  posts: []
}

export const requestRobots = (
  state = initialStateRobots, { type, payload }) => {
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: payload };
    case REQUEST_ROBOTS_POSTS_SUCCESS:
      return { ...state, posts: payload };
      case REQUEST_ROBOTS_POSTS_FAILED:
      return { ...state, error: payload };
    default:
      return state
  }
}
