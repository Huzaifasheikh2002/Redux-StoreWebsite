import axios from "axios";
import {ActionTypes}  from "../Constant";

const getProductAction=()=>{
return async (dispatch)=>{
    try {
        dispatch({
            type:ActionTypes.GET_DATA_LOADING,
        })
        const data =await axios.get("https://fakestoreapi.com/products");
        console.log("data",data);
        dispatch({
            type: ActionTypes.GET_DATA_SUCCESS,
            payload:data.data,
        });
        console.log(data);
    } catch (error) {
        console.log(error,"error");
        dispatch({
            type:ActionTypes.GET_DATA_FAIL,
        });
    }
};
};

const AddtoCartAction=(product)=>{
    return(dispatch)=>{
        dispatch({
            type:ActionTypes.ADD_TO_CART,
            payload:product,
            
        });
    };
};

export{getProductAction,AddtoCartAction}; 