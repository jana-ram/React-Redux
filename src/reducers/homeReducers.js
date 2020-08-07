import {
    CommonConstant
} from '../constant';
const initialState = {
    payload : "",
    type:'',
    error : ""
}

export default function homeReducers(state = initialState, action) {
    switch (action.type) {
        case CommonConstant.HOMESEARCHSUCCESS:
          return {
            payload: action.payload,
            type: action.notificationType
          }; 
        case CommonConstant.HOMESEARCHFAIL:
          return {
            payload: "",
            type: action.notificationType
          };    
        default:
          return initialState
      }
}