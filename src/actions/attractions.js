export const setAttractions = (attractions) => {
    return {
      type: "SET_ATTRACTIONS",
      attractions,
    };
  };


export const getAttractions = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/attractions", {
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
            dispatch(setAttractions(response))
           
          }
        })
        .catch(console.log)
    }
}