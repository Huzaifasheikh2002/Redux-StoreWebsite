import axios from "axios";
import {ActionTypes}  from "../Constant";

const getProductAction=()=>{
return async (dispatch)=>{
    try {
        const data =await axios.get("https://fakestoreapi.com/products");
        console.log("data",data);
        dispatch({
            type: ActionTypes.GET_PRODUCT_DATA,
            payload:data.data,
        });
        console.log(data);
    } catch (error) {
        console.log(error,"error");
    }
};
};
export{getProductAction};