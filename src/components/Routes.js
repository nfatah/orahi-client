/*
* Routes Component
* Routes are its own component in RR4
*/

import React from 'react';
import { Route, Link } from 'react-router-dom'
import Login from './partials/Login';
import Register from './partials/Register';

const Service = ({ match }) => (
  <div>
    <h1>My Service</h1>
    <h3>{ match.params.service ||  'Please select an service to view' }</h3>
  </div>
)
const Home = () => (
    <div>
    <h1>Orahi Home page</h1>
    <Link to="/services">My Services</Link>
  </div>

)


const Routes = () => (
  <div>
    <Route exact path="/" component={ Home } /> 
    <Route path="/login" component={ Login } /> 
    <Route path="/register" component={ Register } /> 
    <Route exact path="/services/:service" component={ Service } />  
  </div>
);
export default Routes;