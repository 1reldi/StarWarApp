import { combineReducers } from 'redux';

import moviesReducer from './models/movies';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
