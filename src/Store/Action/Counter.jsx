import { ActionTypes } from "../Constant";

const AddCounterAction =()=>{
    return(dispatch)=>{
        dispatch({
            type:ActionTypes.PLUS_COUNTER,
          
        });
    }
}
const MinusCounterAction=(dispatch)=>{
    return (dispatch)=>{
        dispatch({
            type:ActionTypes.MINUS_COUNTER,
        });
    };
};
export{AddCounterAction,MinusCounterAction};