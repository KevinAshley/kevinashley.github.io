import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

// actions.js

export const changeCardAppearance = (input) => ({
  type: 'changedCard',
  changed: input
});

export const changeLoginState = (input) => ({
    type: 'changedLoginState',
    loggedIn: input
});

export const changeAuthentication = (input) => ({
    type: 'changedAuth',
    authenticating: input
});

// reducers.js

export const cardState = (state = {}, action) => {
    switch (action.type) {
        case 'changedCard':
            return action.changed;
        default:
            return state;
    }
};

export const loggedIn = (state = {}, action) => {
    switch (action.type) {
        case 'changedLoginState':
            return action.loggedIn;
        default:
            return false;
    }
};

export const authenticating = (state = {}, action) => {
    switch (action.type) {
        case 'changedAuth':
            return action.authenticating;
        default:
            return false;
    }
};



export const reducers = combineReducers({
  cardState,
  loggedIn,
  authenticating
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
