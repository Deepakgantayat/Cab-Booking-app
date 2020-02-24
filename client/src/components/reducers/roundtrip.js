const roundtripInitialState = []

const roundtripReducer = (state = roundtripInitialState, action) => {
    switch(action.type){
        case 'SET_ROUNDTRIPS' : {
            return [...action.payload]
        }
       
        case 'ADD_ROUNDTRIP' : {
            return [...state, action.payload]
        }
        case 'EDIT_ROUNDTRIP' : {
            return state.map(roundtrip => {
                if(roundtrip._id === action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...roundtrip}
                }
            })
        }
        case 'REMOVE_ROUNDTRIP':{
            return state.filter(roundtrip => roundtrip._id !== action.payload) 
        }
        default: {
            return [...state]
        }
    }
 }

export default roundtripReducer