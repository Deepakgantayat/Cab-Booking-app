import React from 'react'
import {connect} from 'react-redux'

class CarForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            model: props.model ? props.model : '',
            capacity: props.capacity ? props.capacity: '',
            safetybag: props.safetybag ? props.safetybag:'',
            rating:props.rating?props.rating:'',
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
            model: this.state.model,
            capacity: this.state.capacity,
            safetybag:this.state.safetybag,
            rating:this.state.rating
        }
        this.props.handleSubmit(formData)
    }
    render(){
        console.log(this.props.cars)
        return(
            <div>
           
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label> Model </label>
                    <input type="text" value={this.state.model} onChange={this.handleChange} name="model" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>Capacity</label>
                    <input type="text" value={this.state.capacity} onChange={this.handleChange} name="capacity" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>Safety Bags</label>
                    <input type="text" value={this.state.safetybag} onChange={this.handleChange} name="safetybag" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>Ratings</label>
                    <input type="text" value={this.state.rating} onChange={this.handleChange} name="rating" className="form-control"/>
                    </div>                    
                    <input type ="submit" className="btn btn-primary btn-lg btn-block"/>
                </form>
            </div>            
        )
    }
}
  export default connect()(CarForm)