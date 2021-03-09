import React from "react";
import { connect } from "react-redux";
import { addAttraction } from "../actions/addAttractions";

class AttractionInput extends React.Component {
  state = {
    name: "",
    description: "",
    location: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/')
    this.props.addAttraction(this.state);
    this.setState({
      name: "",
      description: "",
      location: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="text-center mb-20">
            <div className="xl:w-full border-b border-gray-300 py-5 mt-20">
              <div className="flex flex-col items-center w-full">
                <p className="text-2xl text-gray-800 font-bold text-indigo-500">
                  Attraction Information
                </p>
                <div className="ml-2 cursor-pointer text-gray-600 "></div>
              </div>
            </div>
            <div className="flex-column mx-4 mt-10">
              <label className="pb-2 text-sm font-bold text-gray-800">
                Attraction Name:{" "}
              </label>
              <input
                type="text"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                className="w-1/2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-4"
              />
              <br />
              <label className="pb-2 text-sm font-bold text-gray-800">
                Attraction  Description:{" "}
              </label>
              <input
                type="text"
                placeholder="Description"
                value={this.state.description}
                name="description"
                onChange={this.handleChange}
                className="w-1/2 px-3 py-2 h-16 text-base placeholder-gray-300 border border-gray-300 rounded-md 
                resize-none  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mb-4"
              />
              <br />

              <label className="pb-2 text-sm font-bold text-gray-800 ">
                Attraction Location:{" "}
              </label>
              <input
                type="text"
                placeholder="Location"
                value={this.state.location}
                name="location"
                onChange={this.handleChange}
                className="w-1/2 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <br />
              <input
                className="bg-indigo-500 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white lg:w-1/4 w-1/2 py-4 text-sm focus:outline-none mt-6 "
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addAttraction })(AttractionInput);
