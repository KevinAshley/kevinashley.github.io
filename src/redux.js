import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

const initialState = {
  loggedIn: false,
  userEmail: ''
}

// actions.js

export const changeLoginState = (loggedInState, userEmail) => ({
    type: 'CHANGE_LOGIN_STATE',
    loggedIn: loggedInState,
    email: userEmail
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

const userEmail = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN_STATE':
            return action.email
        default:
            return false
    }
}

export const reducers = combineReducers({
  loggedIn,
  userEmail
});

export const store = createStore(reducers, initialState);
