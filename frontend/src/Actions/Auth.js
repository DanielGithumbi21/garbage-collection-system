import { AUTH } from "../constants/actiontypes";
import * as api from "../api/index"


export const customerSignin = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.customerSignin (formData);
        dispatch ({type:AUTH,data})
        history.push("/customer/pickup")
    } catch (error) {
        console.log(error)
    }
}

export const customerSignup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.customerSignup (formData);
        dispatch ({type:AUTH,data})
        history.push("/customer/pickup")
    } catch (error) {
        console.log(error)
    }
}

export const garbageSignin = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.garbageSignin (formData);
        dispatch ({type:AUTH,data})
        history.push("/vendor/booking")
    } catch (error) {
        console.log(error)
    }
}

export const garbageSignup = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.garbageSignup (formData);
        dispatch ({type:AUTH,data})
        history.push("/vendor/booking")
    } catch (error) {
        console.log(error)
    }
}


