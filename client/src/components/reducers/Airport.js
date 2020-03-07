const airportsInitialState = []

const airportReducer = (state = airportsInitialState, action) => {
    switch(action.type){
        case 'SET_AIRPORTS' : {
            return [...action.payload]
        }
       
        case 'ADD_AIRPORT' : {
            return [...state, action.payload]
        }
        case 'EDIT_AIRPORT' : {
            return state.map(airport => {
                if(airport._id === action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...airport}
                }
            })
        }
        case 'REMOVE_AIRPORT':{
            return state.filter(airport => airport._id !== action.payload) 
        }
        default: {
            return [...state]
        }
    }
 }

export default airportReducer