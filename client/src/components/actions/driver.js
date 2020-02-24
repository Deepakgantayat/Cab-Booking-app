import axios from 'axios'
import swal from 'sweetalert'

export const setDrivers = (drivers) => {
    return {
        type: 'SET_DRIVERS',
        payload: drivers
    }
}

export const startSetDrivers = () => {
    return (dispatch) => {
        axios.get('http://localhost:3055/drivers', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const drivers = response.data
           dispatch(setDrivers(drivers))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addDriver = (driver) =>{
    return {
        type : 'ADD_DRIVER',
        payload: driver
    }
}

export const startAddDriver = (formData, props) => {
    return (dispatch) => {
        axios.post('http://localhost:3055/drivers', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                swal("fill all the field")//response.data.errors.message
            }
            else{
                const driver = response.data
                dispatch(addDriver(driver))
                props.history.push(`/drivers/${driver._id}`)

            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editDriver = (driver) =>{
    return {
        type: 'EDIT_DRIVER',
        payload: driver
    }
}

export const startEditDriver = (formData,props) => {
    return (dispatch) => {
        axios.put(`http://localhost:3055/drivers/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('reason')){
                swal("please provide data")//response.data.errors.message
            }
            else{
                const driver = response.data
                dispatch(editDriver(driver))
                props.history.push(`/drivers/${driver._id}`)
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeDriver = (id) => {
    return {
        type: 'REMOVE_DRIVER',
        payload : id
    }
}

export const startRemoveCar = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`http://localhost:3055/driver/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeDriver(response.data._id))
        })
    }    
}