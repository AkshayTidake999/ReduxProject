import {ADD_TO_CART} from '../Constant'
function addToCart(data){
    console.log("Data : ",data)
    return {
        data : data ,
        type : ADD_TO_CART
    }
}

export default addToCart