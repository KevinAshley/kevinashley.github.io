import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

const initialState = {
  loggedIn: false,
  user: {},
  accountId: ''
}

// actions.js

export const changeLoginState = (loggedIn, user, accountId) => ({
    type: 'CHANGE_LOGIN_STATE',
    loggedIn: loggedIn,
    user: user,
    accountId: accountId
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

const accountId = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN_STATE':
            return action.accountId
        default:
            return false
    }
}

export const reducers = combineReducers({
  loggedIn,
  user,
  accountId
});

export const store = createStore(reducers, initialState);
