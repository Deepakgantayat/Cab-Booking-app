import React from 'react'
import {connect} from 'react-redux'

class OnewayForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            from: props.from ? props.from : '',
            to: props.to ? props.to: '',
            date: props.date ? props.date:'',
            carId:props.car?props.car:'',
            driverId:props.driver?props.driver:'',
            detailsId:props.details?props.details:'',
        }
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            from: this.state.from,
            to: this.state.to,
            date:this.state.date,
            car:this.state.carId,
            driver:this.state.driverId,
            details:this.state.detailsId,
        }
        this.props.handleSubmit(formData)
    }
    render(){
        console.log(this.props.cars)
        return(
            <div>
           
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label> From </label>
                    <input type="text" value={this.state.from} onChange={this.handleChange} name="from" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>To</label>
                    <input type="text" value={this.state.to} onChange={this.handleChange} name="to" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>Date- (DD/MM/YY)</label>
                    <input type="text" value={this.state.date} onChange={this.handleChange} name="date" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>Car</label>
                    <select name="carId" onChange={this.handleChange} className="form-control">
                        <option >Choose Your Car</option>
                        {
                            this.props.cars.map(car=>{
                                return <option key={car._id} value={car._id}>{car.model}</option>
                            })
                        }
                       </select>
                    </div>
                    <div className="form-group">
                    <label>Driver</label>
                    <select name="driverId" onChange={this.handleChange} className="form-control">
                        <option >Choose Your Driver</option>
                        {
                            this.props.drivers.map(driver=>{
                                return <option key={driver._id} value={driver._id}>{driver.name}</option>
                            })
                        }
                       </select>
                    </div>
                    <div className="form-group">
                    <label>Booking For</label>
                    <select name="detailsId" onChange={this.handleChange} className="form-control">
                        <option >Choose Your Contact</option>
                        {
                            this.props.details.map(detail=>{
                                return <option key={detail._id} value={detail._id}>{detail.name}</option>
                            })
                        }
                       </select>
                    </div>
                    <input type ="submit" className="btn btn-primary btn-lg btn-block"/>
                </form>
            </div>            
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
        cars: state.cars,
        drivers: state.drivers,
        details: state.details
    }
  }
  export default connect(mapStateToProps)(OnewayForm)