import { LOGOUT,AUTH,VENDOR } from "../constants/actiontypes";

const authReducer = (state =  {authData:null},action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data};
        case LOGOUT:
            localStorage.clear()
            return {...state,authData:null};
        case VENDOR:
            localStorage.setItem('vendor',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data};
        default:
            return state;
    }
}
export default authReducer;