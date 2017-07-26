/*
*Main NarBar Component
*/

import React from 'react';
import { Navbar } from 'react-materialize'
import { NavLink } from 'react-router-dom';

class MainNavBar extends React.Component {
  render() {
    return (
      <Navbar className="grey darken-4" brand=' Orahi' right>
        <li>
          <NavLink exact to="/" activeClassName="active orange accent-4">
            <span>DASHBOARD</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" activeClassName="active orange accent-4">
            <span>LOGOUT</span>
          </NavLink>
        </li>
      </Navbar>
    );
  }
};

export default MainNavBar;