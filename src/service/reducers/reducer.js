import { ADD_TO_CART, REMOVE_TO_CART } from '../constants'

//setting initial state
let initialState = {
    cartData: {
    }
}

//this function will perform the addition and deletion of data according to the type of action
export default function cardItems(state = initialState, action) {

    let id = 1;
    if (action.data && action.data.cardDetail) {
        id = action.data.cardDetail.id
    }
    switch (action.type) {

        case ADD_TO_CART:
            {
                console.warn("reducer", action.data)
                //get data from localstorage if user refreshes the page
                if (JSON.parse(localStorage.getItem('state')))
                    state = JSON.parse(localStorage.getItem('state'))
                let temp = Object.assign({}, state)
                //check id this id already exist in state then it will increment the quantity
                if (temp.cartData[id]) {
                    temp.cartData[id]++;
                }
                else
                    temp.cartData[id] = 1;
                localStorage.setItem('state', JSON.stringify(temp));
                return temp;

            }
        case REMOVE_TO_CART:
            {
                //get data from localstorage if user refreshes the page
                if (JSON.parse(localStorage.getItem('state')))
                    state = JSON.parse(localStorage.getItem('state'))
                let temp = Object.assign({}, state)
                if (temp.cartData[id] && temp.cartData[id] > 0) {
                    temp.cartData[id]--;
                }
                else
                    temp.cartData[id] = 0;
                localStorage.setItem('state', JSON.stringify(temp));
                return temp;

            }

        default:
            return state
    }
}