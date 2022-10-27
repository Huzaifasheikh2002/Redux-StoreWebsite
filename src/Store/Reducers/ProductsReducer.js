import { ActionTypes } from "../Constant";

const INITIALSTATE ={
    data:[],
    dataLoading:false,
    // addtocart
    cartItem:[],
}

const GetProductReducer =(state = INITIALSTATE,action)=>{
    switch(action.type){
        case ActionTypes.GET_DATA_LOADING:
        return{
           ...state,
           dataLoading:true
        }
        case ActionTypes.GET_DATA_SUCCESS:
            return{
                ...state,
                data:action.payload,
            dataLoading:false,

            };
            case ActionTypes.GET_DATA_FAIL:
                return{
                    ...state,
                dataLoading:false,
                data:[],
    
                };
            default:
            return state;
    }
};
const AddtoCartReducer =(state = INITIALSTATE,action)=>{
    switch(action.type){
    
        case ActionTypes.ADD_TO_CART:
            console.log(action.payload,"action.payload");
            return{
                ...state,
                // data:action.payload,
                cartItem:[...state.cartItem,action.payload],

            };
            default:
            return state;
    }
};
export{GetProductReducer,AddtoCartReducer};