const driverInitialState = []

const driverReducer = (state = driverInitialState, action) => {
    switch(action.type){
        case 'SET_DRIVERS' : {
            return [...action.payload]
        }
       
        case 'ADD_DRIVER' : {
            return [...state, action.payload]
        }
        case 'EDIT_DRIVER' : {
            return state.map(driver => {
                if(driver._id === action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...driver}
                }
            })
        }
        case 'REMOVE_DRIVER':{
            return state.filter(driver => driver._id !== action.payload) 
        }
        default: {
            return [...state]
        }
    }
 }

export default driverReducer