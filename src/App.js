import React from "react";
import { getCurrentUser } from "./actions/currentUser.js";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cafe from './pages/Cafe';
import Attractions from './pages/Attractions'
import Home from './pages/Home'
import Signup from './components/Signup';
import Login from './components/Login';
// import Logout from './components/Logout';
import NewMenu from './components/MenuForm';
import { getMenu } from './actions/menu';
import { getAttractions } from './actions/attractions';
import AttractionInput from './components/AddAttractions';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getMenu();
    this.props.getAttractions();
  }

  render() {
    // const { loggedIn } = this.props
    return (
      <div className="App">
        <Router>
        <NavBar />
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cafe" component={Cafe} />
            
            <Route exact path="/menu/new" component={NewMenu} />
            <Route exact path="/attractions" component={Attractions} />
            <Route exact path="/attractions/new" component={AttractionInput} />
            <Route exact path="/" component = {Home} />
        </Switch>
      </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser, getMenu, getAttractions })(App);
