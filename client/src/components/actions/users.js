import {setDrivers} from './driver'
import {setCars} from './car'
import {setOneway} from './oneway'
import {setRoundtrips} from './roundtrip'
import {setMulticities} from './multicity'
import {setDetails} from './details'
import axios from '../../config/axios'
import swal from 'sweetalert'

export const setUser = (user = {}) => {
    return {
        type:'SET_USER',
        payload: user
    }
}

export const startResgisterUser =(formData, props)=>{
    return (dispatch) => {
        axios.post('/users/register', formData)
            .then((response) => {
                const data =response.data
                if(data.hasOwnProperty('errors')){
                    console.log(response)
                    swal(data.message)
                }
                else{
                    swal('successfully registered')
                    //redirect user to another page automatically
                    dispatch(setUser())
                   props.history.push('/users/login')
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startLoginUser = (formData, props) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then((response) => {
                swal(response.data)
                if(!response.data.token){
                    console.log(response.data)
                }
                else{
                   swal(response.data)
                    const token = response.data.token
                    localStorage.setItem('authToken', token)
                    swal('Succssfully logged in')

                    Promise.all([axios.get('/users/account',{
                        header: {
                            'x-auth' : token
                        }
                    }), axios.get('/cars', {
                        headers: {
                            'x-auth' : token
                        }
                    }),axios.get('/drivers', {
                        headers: {
                            'x-auth' : token
                        }
                    }), axios.get('/oneways', {
                        headers: {
                            'x-auth' : token
                        }
                    }), axios.get('/roundtrips', {
                        headers: {
                            'x-auth' : token
                        }
                    }), axios.get('/multicities', {
                        headers: {
                            'x-auth' : token
                        }
                    }),
                    axios.get('/details', {
                        headers: {
                            'x-auth' : token
                        }
                    })
                ])

                    .then(values => {
                        const [userResponse, CarsResponse, DriversResponse, onewaysResponse, roundtripsResponse, multicitiesResponse,detailsResponse] = values  //, NotesResponse, CategoriesResponse
                        dispatch(setUser(userResponse.data))
                        dispatch(setCars(CarsResponse.data))
                        dispatch(setDrivers(DriversResponse.data))
                        dispatch(setOneway(onewaysResponse.data))
                        dispatch(setRoundtrips(roundtripsResponse.data))
                        dispatch(setMulticities(multicitiesResponse.data))
                        dispatch(setDetails(detailsResponse.data))
                        props.history.push('/')
                    })
                    this.props.history.push('/')
                    window.location.reload()

                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startGetUser = () =>{
    return(dispatch) =>{
        axios.get('/users/account',{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            const user = response.data
            dispatch(setUser(user))
        })
    }
}

export const startLogoutUser = () => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers: {
              'x-auth': localStorage.getItem('authToken')
            }
          })
          .then(response =>{
            if(response.data.hasOwnProperty('notice')){
              localStorage.removeItem('authToken')
              dispatch(setUser({}))
              window.location.href = '/users/login'
            }
          })
    }
}