const INITIALSTATE ={
    globalCounter:0,
};

const addCounterReducer=(state =INITIALSTATE,action)=>{
    switch(action.type){
        case "PLUS_COUNTER":
            console.log();
            return{
                globalCounter: ++state.globalCounter,
            };
            case "MINUS_COUNTER":
                console.log();
                return{
                    globalCounter: --state.globalCounter,
                };
                default:
                    return {...state};
    }
};
export{addCounterReducer} 