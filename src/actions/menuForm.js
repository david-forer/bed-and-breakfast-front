
export const updateMenuForm = (formData) => {
    // const formData = {name, value}
    return {
        type: "UPDATE_MENU_FORM",
        formData
    }
}

export const resetMenuForm = () => {
    return {
        type: "RESET_MENU_FORM"
    }
}




export const setFormDataForEdit = menu => {
    const menuFormData = {
      name: menu.attributes.name,
      startDate: menu.attributes.start_date,
      endDate: menu.attributes.end_date
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      menuFormData
    }
  }