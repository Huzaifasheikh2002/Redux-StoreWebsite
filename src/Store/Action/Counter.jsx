const AddCounterAction =()=>{
    return(dispatch)=>{
        dispatch({
            type:"PLUS_COUNTER",
          
        });
    }
}
const MinusCounterAction=(dispatch)=>{
    return (dispatch)=>{
        dispatch({
            type:"MINUS_COUNTER"
        });
    };
};
export{AddCounterAction,MinusCounterAction};