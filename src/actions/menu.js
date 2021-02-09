export const setMenu = (menu) => {
  return {
    type: "SET_MENU",
    menu,
  };
};

export const getMenu = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/menus", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMenu(response.data))
            
          }
        })
        .catch(console.log)
    }
}

export const updateMenuForm = (formData) => {
    return {
        type: "UPDATE_MENU_FORM",
        formData
    }
}
