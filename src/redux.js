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
    type: 'changedLogin',
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

export const loginState = (state = {}, action) => {
    switch (action.type) {
        case 'changedLogin':
            return action.loggedIn;
        default:
            return state;
    }
};

export const authState = (state = {}, action) => {
    switch (action.type) {
        case 'changedAuth':
            return action.authenticating;
        default:
            return state;
    }
};



export const reducers = combineReducers({
  cardState,
  loginState
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
