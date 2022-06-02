import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { otherReducer } from '../reducer/otherReducer';

const reducers = combineReducers({
  other: otherReducer,
});

// const composeEnhacers =
//   (process.env.NODE_ENV === 'development' &&
//     (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);