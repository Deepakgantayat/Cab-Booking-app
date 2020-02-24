import React from 'react'

export default class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email: '',
            phone: ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }

        this.props.handleSubmit(formData)
        this.setState({name:"", email:"", phone: ""})
    }

    render(){
        return(
            <div className="row">   
                    
            <div className="col-md-12 ">
            <br/>   
            <br/>   
            <br/>   
            <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name"> Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name"> Email</label>
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email" id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name"> Phone</label>
                    <input type="text" value={this.state.phone} onChange={this.handleChange} name="phone" id="phone" className="form-control" />
                    </div>
                    <input type="submit" className="btn btn-primary btn-lg btn-block"/>
                </form>
            </div>     
            </div>
        )
    }
}