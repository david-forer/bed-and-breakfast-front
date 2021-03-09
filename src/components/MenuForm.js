import React from "react";
import { updateMenuForm } from "../actions/menuForm";
import { createMenu } from "../actions/menu";
import { connect } from "react-redux";


const MenuForm = ({ menuFormData, updateMenuForm, createMenu }) => {
  const {name, image, desc, price, status } = menuFormData || {}

  const handleChange = event => {
    console.log(event.target.value)
    const { name, value } = event.target
    const updatedMenuForm = {
      ...menuFormData,
      [name]: value,
    };
    updateMenuForm(updatedMenuForm);
    
  };

  
  // const handleSubmit = (event) => {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.PreventDefault();
  //   createMenu(updateMenuForm, history);
  // };

  // event => {
  //   event.preventDefault()
  //   handleSubmit(menuFormData)

  const  handleSubmit = (event) =>{
    console.log('A name was submitted: ', event);
    event.preventDefault();
    // eslint-disable-next-line no-undef
    createMenu(menuFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        defaultValue={name}
      />
      <input
        placeholder="image"
        name="image"
        onChange={handleChange}
        defaultValue={image}
      />
      <input
        placeholder="description"
        name="desc"
        onChange={handleChange}
        defaultValue={desc}
      />
      <input
        placeholder="price"
        name="price"
        onChange={handleChange}
        defaultValue={price}
      />
      <input
        placeholder="status"
        name="status"
        onChange={handleChange}
        defaultValue={status}
      />
      <input type="submit" value="submit" />
    </form>
  );
};
const mapStateToProps = (state) => {
 
  // const { name, image, desc, price, status } = state.newMenuForm
  return {
    menuFormData: state.menuForm
    
  };
};

export default connect(mapStateToProps, { updateMenuForm, createMenu })(MenuForm);
