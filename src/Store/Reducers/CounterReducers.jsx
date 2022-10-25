import { ActionTypes } from "../Constant";

const INITIALSTATE ={
    globalCounter:0,
    name :"example",
};

const addCounterReducer=(state =INITIALSTATE,action)=>{
    switch(action.type){
        case ActionTypes.PLUS_COUNTER:
            console.log();
            return{
                globalCounter: ++state.globalCounter,
            };
            case ActionTypes.MINUS_COUNTER:
                console.log();
                return{
                    globalCounter: --state.globalCounter,
                };
                default:
                    return {...state};
    }
};
export{addCounterReducer} 