import React from 'react'

class App extends React.Component {
  componentDidMount() {
  fetch('http://localhost:3001/api/v1/menus').then(r=>r.json()).then(console.log)
}


  render() {
    return (
     
      <div className="App">
        <h1> Hello World!</h1>
         
      </div>
    )
  }
}


export default App;
