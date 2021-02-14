import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value,
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginFormData, history);
  };

  return (
    <div class="flex items-center mt-20  bg-white dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Log in
            </h1>
            <p class="text-gray-500 dark:text-gray-400">
              Log in to access your account
            </p>
          </div>
          <div class="m-7"></div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="email"
              value={loginFormData.email}
              name="email"
              type="email"
              onChange={handleInputChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-4"
            />
            <input
              placeholder="password"
              value={loginFormData.password}
              name="password"
              type="text"
              onChange={handleInputChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-4"
            />
            <input
              type="submit"
              value="Log In"
              className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
  };
};

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
