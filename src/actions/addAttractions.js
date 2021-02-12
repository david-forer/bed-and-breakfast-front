export const addAttraction = (data) => {

    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/attractions', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(attraction => dispatch({type: 'ADD_ATTRACTION', payload: attraction}))
    }
  
  }
  