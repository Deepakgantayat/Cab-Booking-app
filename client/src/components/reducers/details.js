const detailsInitialState = []

const detailReducer = (state = detailsInitialState, action) => {
    switch(action.type){
        case 'SET_DETAILS' : {
            return [...action.payload]
        }
       
        case 'ADD_DETAIL' : {
            return [...state, action.payload]
        }
        case 'EDIT_DETAIL' : {
            return state.map(detail => {
                if(detail._id === action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...detail}
                }
            })
        }
        case 'REMOVE_DETAIL':{
            return state.filter(detail => detail._id !== action.payload) 
        }
        default: {
            return [...state]
        }
    }
 }

export default detailReducer