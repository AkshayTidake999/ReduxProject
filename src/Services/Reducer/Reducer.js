import { ADD_TO_CART } from "../Constant";

const initialState = {
    cardData : []
}

function cardItems(state = [] , action){
    switch(action.type){
        case ADD_TO_CART :
            console.log("Reducer ",action)
            return[
                ...state , 
                {cardData : action.data }
            ]
            break;
            default : 
            return state
    }
}

export default cardItems