const multicityInitialState = []

const multicityReducer = (state = multicityInitialState, action) => {
    switch(action.type){
        case 'SET_MULTICITIES' : {
            return [...action.payload]
        }
       
        case 'ADD_MULTICITY' : {
            return [...state, action.payload]
        }
        case 'EDIT_MULTICITY' : {
            return state.map(multicity => {
                if(multicity._id === action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...multicity}
                }
            })
        }
        case 'REMOVE_MULTICITY':{
            return state.filter(multicity => multicity._id !== action.payload) 
        }
        default: {
            return [...state]
        }
    }
 }

export default multicityReducer