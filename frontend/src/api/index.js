import axios from "axios";

const API = axios.create({baseURL:"http://localhost:5000"})

export const customerSignin = (formdata) => API.post('customer/login',formdata)
export const customerSignup = (formdata) => API.post('customer/register',formdata)

export const garbageSignin = (formdata) => API.post('vendor/login',formdata)
export const garbageSignup = (formdata) => API.post('vendor/register',formdata)