import api from "../api";
import { USER_LOGGED_IN,USER_LOGGED_OUT } from "../types";
import setAuthorizationHeader from './setAuthorizationHeader'

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
})

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
})

export const login = (credentials) => (dispatch) => 
  api.user.login(credentials).then(user => {
    // localStorage.acciJWT = user.token
    // localStorage.acciJWT = user.token
    localStorage.acciJWT = user.email
    setAuthorizationHeader(user.email);
    // setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user))
  })

export const logout = () => (dispatch) => {
  localStorage.removeItem('acciJWT')
    dispatch(userLoggedOut())
  }