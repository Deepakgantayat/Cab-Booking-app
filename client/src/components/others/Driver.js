import React from 'react'
import {connect} from 'react-redux'

class DriverForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            languages: props.languages ? props.languages : '',
            name: props.name ? props.name: '',
            phone: props.phone ? props.phone:'',
            experience:props.experience?props.experience:'',
            adharcard: props.adharcard?props.adharcard:'',
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
            languages: this.state.languages,
            name: this.state.name,
            phone:this.state.phone,
            experience:this.state.experience,
            adharcard:this.state.adharcard
        }
        this.props.handleSubmit(formData)
    }
    render(){
        console.log(this.props.cars)
        return(
            <div>
           
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label> languages </label>
                    <input type="text" value={this.state.languages} onChange={this.handleChange} name="languages" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>name</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>phone</label>
                    <input type="text" value={this.state.phone} onChange={this.handleChange} name="phone" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>experience</label>
                    <input type="text" value={this.state.experience} onChange={this.handleChange} name="experience" className="form-control"/>
                    </div>  
                    <div className="form-group">
                    <label>adharcard</label>
                    <input type="number" value={this.state.adharcard} onChange={this.handleChange} name="adharcard" className="form-control"/>
                    </div>                   
                    <input type ="submit" className="btn btn-primary btn-lg btn-block"/>
                </form>
            </div>            
        )
    }
}
  export default connect()(DriverForm)