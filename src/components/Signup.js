import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    
    const handleInputChange = event => {
        console.log(event.target.value)
        const { name, value } = event.target 
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        console.log('A name was submitted: ', event);
        event.preventDefault()
        signup(signupFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleInputChange} />
            <input placeholder="email" value={signupFormData.email} name="email" type="email" onChange={handleInputChange} />
            <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputChange} /> 
            <input type="submit" value="Sign Up" />
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
       signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup} )(Signup)
