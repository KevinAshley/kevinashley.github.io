import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

const initialState = {
  loggedIn: false,
  user: {}
}

// actions.js

export const changeLoginState = (loggedIn, user) => ({
    type: 'CHANGE_LOGIN_STATE',
    loggedIn: loggedIn,
    user: user
});

// reducers.js

const loggedIn = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN_STATE':
            return action.loggedIn
        default:
            return false
    }
}

const user = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN_STATE':
            return action.user
        default:
            return false
    }
}

export const reducers = combineReducers({
  loggedIn,
  user
});

export const store = createStore(reducers, initialState);
