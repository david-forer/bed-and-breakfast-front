import React from "react";
import Logout from './Logout'
// import Login from './Login'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import Signup from ../actions/Signup

const NavBar = ({ currentUser, loggedIn }) => {
    return (

      <>
        <div className="bg-opacity-0">
        <nav className="flex justify-between bg-opacity-0">
        <div className="flex items-center flex-shrink-0 text-black mr-6 ">
        <span className="font-bold text-xl">DECK Bed & Breakfast</span>
    </div>
         
        <ul className="flex flex-start items-center mb-5 text-l font-semibold  md:mb-0 md:pl-8 md:ml-8  ">
                <li className="hover:text-indigo-500 py-2 px-6"><Link to="/">Home</Link></li>
                <li className="hover:text-indigo-500 py-2 px-6"><Link to="/cafe">Cafe</Link></li>
              <li className="hover:text-indigo-500 py-2 px-6"><Link to="/attractions">Attractions</Link></li>
              {currentUser ? <li className="hover:text-indigo-500 py-2 px-6"><Link to="/attractions/new">Add Attraction</Link></li> : null}
            
            <li className="hover:text-indigo-500 py-2 px-6"><Link to="/rooms">Rooms</Link></li>
          </ul>
  
          {/* <li><Link to="/menu/new">new</Link></li> */}
          <ul className="flex justify-end  mb-5 text-l font-semibold  md:mb-0 md:pl-8 md:ml-8 opacity-100 ">
          {/* <div></div> */}
            {/* <li className="hover:text-red-500 py-2 px-2 hover:bg-gray-100"></li> */}
            {/* <li className="hover:text-red-500 py-2 px-2 hover:bg-gray-100"><Link to="/login">Log In</Link></li> */}
            <li className="flex items-center justify-center py-1 pl-4 pr-4 text-lg font-bold text-black bg-white ">{currentUser ? <Logout /> : <button className="flex items-center justify-center py-1 pl-4 pr-4 text-lg font-bold text-black bg-white ">
            <Link to="/signup">Sign Up</Link>
                                    <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                        <path d="M9.129 5.24952L5.106 1.22652L6.1665 0.166016L12 5.99952L6.1665 11.833L5.106 10.7725L9.129 6.74952H0V5.24952H9.129Z" fill="white" />
                                    </svg>
                                </button>} </li>

            {/* <button className="flex items-center justify-center py-3 pl-6 pr-4 text-lg font-bold text-black bg-white bg-gray-200">
            <Link to="/signup">Sign Up</Link>
                                    <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                        <path d="M9.129 5.24952L5.106 1.22652L6.1665 0.166016L12 5.99952L6.1665 11.833L5.106 10.7725L9.129 6.74952H0V5.24952H9.129Z" fill="white" />
                                    </svg>
                                </button>
           */}
                {/* <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li> */}
                {/* { loggedIn ? <p>logged in as {currentUser.attributes.name }</p> : null} */}
                
                {/* <li>{currentUser ? <Logout /> : null} </li> */}
           
            </ul>
        </nav>
        </div>
        </>    
  
            
  );
};

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
  
export default connect(mapStateToProps)(NavBar)
  


