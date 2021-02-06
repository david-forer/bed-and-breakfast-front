import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/currentUser'

const Logout = ({  logout }) => {
    
 
    // const handleSubmit = event => {
    //     event.preventDefault()
    //     login(loginFormData)
    // }

    return (
        <form onSubmit={logout}>
            
            <input type="submit" value="Log Out" />
        </form>
    )
}

// const mapStateToProps = (state) => {
//     return {
//        loginFormData: state.loginForm
//     }
// }

export default connect(null, { logout } )(Logout)
