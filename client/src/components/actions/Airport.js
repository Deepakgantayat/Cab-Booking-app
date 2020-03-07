// import axios from 'axios'
import axios from '../../config/axios'
import swal from 'sweetalert'

export const setAirport = (airports) => {
    return {
        type: 'SET_AIRPORTS',
        payload: airports
    }
}

export const startSetAirports = () => {
    return (dispatch) => {
        axios.get('/airports', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const airports = response.data
           dispatch(setAirport(airports))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addAirport = (airport) =>{
    return {
        type : 'ADD_AIRPORT',
        payload: airport
    }
}

export const startAddAirport = (formData, props) => {
    return (dispatch) => {
        axios.post('/airports', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log("aaaaaaaa", response)
            if(response.data.hasOwnProperty('message')){
                swal("fill all the field")//response.data.errors.message
            }
            else{
                const airport = response.data
                dispatch(addAirport(airport))
                props.history.push(`/airports/${airport._id}`)
                window.location.reload()
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editAirport = (airport) =>{
    return {
        type: 'EDIT_AIRPORT',
        payload: airport
    }
}

export const startEditAirport = (formData,props) => {
    return (dispatch) => {
        axios.put(`/airports/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('reason')){
                swal("please provide data")//response.data.errors.message
            }
            else{
                const airport = response.data
                dispatch(editAirport(airport))
                props.history.push(`/airports/${airport._id}`)
                window.location.reload()
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeAirport = (id) => {
    return {
        type: 'REMOVE_AIRPORT',
        payload : id
    }
}

export const startRemoveAirport = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`/airports/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeAirport(response.data._id))
        })
    }    
}