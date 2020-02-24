import axios from 'axios'
import swal from 'sweetalert'

export const setOneway = (oneways) => {
    return {
        type: 'SET_ONEWAYS',
        payload: oneways
    }
}

export const startSetOneways = () => {
    return (dispatch) => {
        axios.get('http://localhost:3055/oneways', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const oneways = response.data
           dispatch(setOneway(oneways))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addOneway = (oneway) =>{
    return {
        type : 'ADD_ONEWAY',
        payload: oneway
    }
}

export const startAddOneway = (formData, props) => {
    return (dispatch) => {
        axios.post('http://localhost:3055/oneways', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                swal("fill all the field")//response.data.errors.message
            }
            else{
                const oneway = response.data
                dispatch(addOneway(oneway))
                props.history.push(`/oneways/${oneway._id}`)

            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editOneway = (oneway) =>{
    return {
        type: 'EDIT_ONEWAY',
        payload: oneway
    }
}

export const startEditOneway = (formData,props) => {
    return (dispatch) => {
        axios.put(`http://localhost:3055/oneways/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('reason')){
                swal("please provide data")//response.data.errors.message
            }
            else{
                const oneway = response.data
                dispatch(editOneway(oneway))
                props.history.push(`/oneways/${oneway._id}`)
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeOneway = (id) => {
    return {
        type: 'REMOVE_ONEWAY',
        payload : id
    }
}

export const startRemoveOneway = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`http://localhost:3055/oneways/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeOneway(response.data._id))
        })
    }    
}