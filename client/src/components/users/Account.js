import React from 'react'
import {connect} from 'react-redux'

class Account extends React.Component{
   
    render(){
        return(
            <div className="card text-center mt-5">
                <br/><br/><br/>
            <div className="card-header">
             ACCOUNT
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.props.account.username}</h5>
              <p className="card-text">{this.props.account.email}</p>
              <a href="/" className="btn btn-primary">Go To Home</a>
            </div>
            <div className="card-footer text-muted">
            INSTACAR - BOOK YOUR RIDE RIGHT HERE - You Can Reach Us Through - deepakgantayat29@gmail.com
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        account : state.user
    }
}

export default connect(mapStateToProps)(Account)