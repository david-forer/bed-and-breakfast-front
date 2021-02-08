import React from "react";
import Logout from './Logout'
// import Login from './Login'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import Signup from ../actions/Signup

const NavBar = ({ currentUser }) => {
    return (

       <>
        <ul className='navbar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cafe">Cafe</Link></li>
                <li><Link to="/attractions">Attractions</Link></li>
               
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
           
                {/* <li>{currentUser ? <strong>Welcome  </strong> : ""}</li> */}
                <li>{currentUser ? <Logout /> : null} </li>
           
            </ul>
        </>    
  
            
  );
};

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser     
    }
  }
  
  export default connect(mapStateToProps)(NavBar)