import {ADD_TO_CART} from '../constants'
import { REMOVE_TO_CART } from '../constants'

//send data  to reducer
export const addToCart =(data)=>{
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart =(data)=>{
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}