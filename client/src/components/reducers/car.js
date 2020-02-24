const carInitialState = []

const carReducer = (state = carInitialState, action) => {
    switch(action.type){
        case 'SET_CARS' : {
            return [...action.payload]
        }
       
        case 'ADD_CAR' : {
            return [...state, action.payload]
        }
        case 'EDIT_CAR' : {
            return state.map(car => {
                if(car._id === action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...car}
                }
            })
        }
        case 'REMOVE_CAR':{
            return state.filter(car => car._id !== action.payload) 
        }
        default: {
            return [...state]
        }
    }
 }

export default carReducer