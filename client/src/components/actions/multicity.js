import axios from 'axios'
import swal from 'sweetalert'

export const setMulticities = (multicities) => {
    return {
        type: 'SET_MULTICITIES',
        payload: multicities
    }
}

export const startSetMulticities = () => {
    return (dispatch) => {
        axios.get('http://localhost:3055/multicities', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const multicities = response.data
           dispatch(setMulticities(multicities))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addMulticity = (multicity) =>{
    return {
        type : 'ADD_MULTICITY',
        payload: multicity
    }
}

export const startAddMulticity = (formData, props) => {
    return (dispatch) => {
        axios.post('http://localhost:3055/multicities', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                swal("fill all the field")//response.data.errors.message
            }
            else{
                const multicity = response.data
                dispatch(addMulticity(multicity))
                props.history.push(`/multicities/${multicity._id}`)

            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editMulticity = (multicity) =>{
    return {
        type: 'EDIT_MULTICITY',
        payload: multicity
    }
}

export const startEditMulticity = (formData,props) => {
    return (dispatch) => {
        axios.put(`http://localhost:3055/multicities/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('reason')){
                swal("please provide data")//response.data.errors.message
            }
            else{
                const multicity = response.data
                dispatch(editMulticity(multicity))
                props.history.push(`/multicities/${multicity._id}`)
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeMulticity = (id) => {
    return {
        type: 'REMOVE_MULTICITY',
        payload : id
    }
}

export const startRemoveMulticity = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`http://localhost:3055/multicities/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeMulticity(response.data._id))
        })
    }    
}