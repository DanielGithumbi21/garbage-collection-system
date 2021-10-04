import { AUTH } from "../constants/actiontypes";


export const signin = (formdata,history) => async (dispatch) => {
    try {
        //log in the user
        history.push("/")
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formdata,history) => async (dispatch) => {
    try {
        //sign up the user
        history.push("/")
    } catch (error) {
        console.log(error)
    }
}

