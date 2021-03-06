import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

export default function user(state = {}, action = {}) {
  switch(action.type){
    case USER_LOGGED_IN:
      return {
        email: action.payload.user.email,
        id: action.payload.user.id,
        role: action.payload.user.role,
        token: action.payload.token
      }
    case USER_LOGGED_OUT:
      return {};
    default: 
      return state
  }
}