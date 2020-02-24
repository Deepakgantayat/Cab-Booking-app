import axios from 'axios'
import swal from 'sweetalert'

export const setCars = (cars) => {
    return {
        type: 'SET_CARS',
        payload: cars
    }
}

export const startSetCars = () => {
    return (dispatch) => {
        axios.get('http://localhost:3055/cars', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            console.log(response)
            const cars = response.data
           dispatch(setCars(cars))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addCar = (car) =>{
    return {
        type : 'ADD_CAR',
        payload: car
    }
}

export const startAddCar = (formData, props) => {
    return (dispatch) => {
        axios.post('http://localhost:3055/cars', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                swal("fill all the field")//response.data.errors.message
            }
            else{
                const car = response.data
                dispatch(addCar(car))
                props.history.push(`/cars/${car._id}`)

            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const editCar = (car) =>{
    return {
        type: 'EDIT_CAR',
        payload: car
    }
}

export const startEditCar = (formData,props) => {
    return (dispatch) => {
        axios.put(`http://localhost:3055/cars/${props.match.params.id}`, formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('reason')){
                swal("please provide data")//response.data.errors.message
            }
            else{
                const car = response.data
                dispatch(editCar(car))
                props.history.push(`/cars/${car._id}`)
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeCar = (id) => {
    return {
        type: 'REMOVE_CAR',
        payload : id
    }
}

export const startRemoveCar = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`http://localhost:3055/cars/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeCar(response.data._id))
        })
    }    
}