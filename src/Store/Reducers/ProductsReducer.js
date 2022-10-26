import { ActionTypes } from "../Constant";

const INITIALSTATE ={
    data:[],
    dataLoading:false,
}

const GetProductReducer =(state = INITIALSTATE,action)=>{
    switch(action.type){
        case ActionTypes.GET_PRODUCT_DATA:
            return{
                ...state,
                data:action.payload,
            };
            default:
            return state;
    }
};
export{GetProductReducer};