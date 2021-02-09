import usersReducer from './reducers/users.js';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import menuForm from './reducers/menuForm'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signupForm from './reducers/signupForm';
import menu from './reducers/menu'

const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  signupForm,
  menuForm,
  menu
  })
  
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;