import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../actions/signupForm";
import { signup } from "../actions/currentUser";
import  Login from './Login'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value,
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    console.log("A name was submitted: ", event);
    event.preventDefault();
    signup(signupFormData, history);
  };

  return (
    <div class="flex items-center mt-20  bg-white dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign Up
            </h1>
            <p class="text-gray-500 dark:text-gray-400">
              Sign Up to to get an account
            </p>
          </div>
          <div class="m-7"></div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="name"
              value={signupFormData.name}
              name="name"
              type="text"
              onChange={handleInputChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-4"
            />
            <input
              placeholder="email"
              value={signupFormData.email}
              name="email"
              type="email"
              onChange={handleInputChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-4"
            />
            <input
              placeholder="password"
              value={signupFormData.password}
              name="password"
              type="text"
              onChange={handleInputChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-4"
            />
            <input
              type="submit"
              value="Sign Up"
              className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
            />
          </form>
          <h1 className="font-bold text-2xl m-8">Or You can Login:</h1>
          <Login />

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm,
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
