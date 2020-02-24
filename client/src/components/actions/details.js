import axios from '../../config/axios'
import swal from 'sweetalert'

export const setDetails = (details) => {
    return {
        type: 'SET_DETAILS',
        payload: details
    }
}

export const startSetDetails = () => {
    return (dispatch) => {
        axios.get('/details', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const details = response.data
           dispatch(setDetails(details))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addDetail = (detail) =>{
    return {
        type : 'ADD_DETAIL',
        payload: detail
    }
}

export const startAddDetail = (formData, props) => {
    return (dispatch) => {
        axios.post('/details', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                swal("fill all the field")//response.data.errors.message
            }
            else{
                const detail = response.data
                dispatch(addDetail(detail))
                props.history.push(`/details/${detail._id}`)

            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editDetail = (detail) =>{
    return {
        type: 'EDIT_DETAIL',
        payload: detail
    }
}

export const startEditDetail = (formData,props) => {
    return (dispatch) => {
        axios.put(`/details/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('reason')){
                swal("please provide data")//response.data.errors.message
            }
            else{
                const detail = response.data
                dispatch(editDetail(detail))
                props.history.push(`/details/${detail._id}`)
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeDetail = (id) => {
    return {
        type: 'REMOVE_DETAIL',
        payload : id
    }
}

export const startRemoveDetails = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`/details/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeDetail(response.data._id))
        })
    }    
}