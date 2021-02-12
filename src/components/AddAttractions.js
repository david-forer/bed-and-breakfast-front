import React from "react";
import { connect } from "react-redux";
import {addAttraction} from '../actions/addAttractions'

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
          <label>Attraction Name: </label>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
                />
                <br />
                <label>Attraction Description: </label>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          <br />
          <label>Attraction Location: </label>
          <input
            type="text"
            placeholder="Location"
            value={this.state.location}
            name="location"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addAttraction })(AttractionInput);
