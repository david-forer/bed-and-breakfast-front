import React from 'react';
import Login from './components/Login';
import { getCurrentUser } from "./actions/currentUser.js";
import { connect } from 'react-redux'
import Logout from './components/Logout';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
     
      // <div className="App">
      //   <h1> Hello World!</h1>
        this.props.currentUser ? <Logout /> : <Login />
      // </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser} ) (App);
