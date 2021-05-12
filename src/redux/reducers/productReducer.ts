import {
    GET_PRODUCTS
} from '../actions/productAction';

const initialState = {
    response: [],
};

export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                response: action.payload,
            };
            default:
                return state;
    }
};
