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
      .then(response => {
        if (response.error) {
          // alert(response.error)
        } else {
          dispatch(addAttraction(response.data))
          // dispatch(resetAttractionForm())
        }
      }
      )
  
  }
}
