import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import NewForm from './components/NewForm';
import EditForm from './components/EditForm';
import ViewCV from './components/ViewCV';
import HomeUser from './components/HomeUser';
import DeleteCV from './components/DeleteCV';

export default
  <React.Fragment>
    <Route
      exact path="/"
      component={ Home } />
    <Route
      exact path="/login"
      component={ Login } />
    <Route
      exact path="/logout"
      component={ Logout } />
    <Route
      exact path="/signup"
      component={ Signup } />
    <Route
      exact path="/user/newform"
      component={ NewForm } />
    <Route
      exact path="/user/editform"
      component={ EditForm } />
    <Route
      exact path="/user/viewcv"
      component={ ViewCV } />
    <Route
      exact path="/user/home"
      component={ HomeUser } />
    <Route
      exact path="/user/delete"
      component={ DeleteCV } />        
  </React.Fragment>
;