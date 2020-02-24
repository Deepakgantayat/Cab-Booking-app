const onewaysInitialState = []

const onewayReducer = (state = onewaysInitialState, action) => {
    switch(action.type){
        case 'SET_ONEWAYS' : {
            return [...action.payload]
        }
       
        case 'ADD_ONEWAY' : {
            return [...state, action.payload]
        }
        case 'EDIT_ONEWAY' : {
            return state.map(oneway => {
                if(oneway._id === action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...oneway}
                }
            })
        }
        case 'REMOVE_ONEWAY':{
            return state.filter(oneway => oneway._id !== action.payload) 
        }
        default: {
            return [...state]
        }
    }
 }

export default onewayReducer