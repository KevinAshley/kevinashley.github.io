import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

// actions.js

export const changeCardAppearance = (input) => ({
  type: 'changed',
  changed: input
});

// reducers.js

export const cardState = (state = {}, action) => {
    switch (action.type) {
        case 'changed':
            return action.changed;
        default:
            return state;
    }
};

export const reducers = combineReducers({
  cardState
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
