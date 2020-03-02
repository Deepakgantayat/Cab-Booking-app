import axios from '../../config/axios'
import swal from 'sweetalert'

export const setRoundtrips = (roundtrips) => {
    return {
        type: 'SET_ROUNDTRIPS',
        payload: roundtrips
    }
}

export const startSetRoundtrips = () => {
    return (dispatch) => {
        axios.get('/roundtrips', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const roundtrips = response.data
           dispatch(setRoundtrips(roundtrips))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addRoundtrip = (roundtrip) =>{
    return {
        type : 'ADD_ROUNDTRIP',
        payload: roundtrip
    }
}

export const startAddRoundtrip = (formData, props) => {
    return (dispatch) => {
        axios.post('/roundtrips', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log("bbbbbb", response)
            if(response.data.hasOwnProperty('errors')){
                swal("fill all the field")//response.data.errors.message
            }
            else{
                const roundtrip = response.data
                dispatch(addRoundtrip(roundtrip))
                props.history.push(`/roundtrips/${roundtrip._id}`)
                window.location.reload()
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editRoundtrip = (roundtrip) =>{
    return {
        type: 'EDIT_ROUNDTRIP',
        payload: roundtrip
    }
}

export const startEditRoundtrip = (formData,props) => {
    return (dispatch) => {
        axios.put(`/roundtrips/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('reason')){
                swal("please provide data")//response.data.errors.message
            }
            else{
                const roundtrip = response.data
                dispatch(editRoundtrip(roundtrip))
                props.history.push(`/roundtrips/${roundtrip._id}`)
                window.location.reload()
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeRoundtrip = (id) => {
    return {
        type: 'REMOVE_ROUNDTRIP',
        payload : id
    }
}

export const startRemoveRoundtrip = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`/roundtrips/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeRoundtrip(response.data._id))
        })
    }    
}