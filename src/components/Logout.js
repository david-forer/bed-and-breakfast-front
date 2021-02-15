import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser'

const Logout = ({  logout }) => {
  
    return (
        <form  onSubmit={logout}>
            <input className="bg-gray-200 font-bold hover:text-indigo-500" type="submit" value="Log Out" />
        </form>
    )
}

export default connect(null, { logout } )(Logout)
