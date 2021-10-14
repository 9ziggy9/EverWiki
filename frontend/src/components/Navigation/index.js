import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="profile-button">
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <div id="profile-button">
        <NavLink to="/login">
          <button>
            <span className="material-icons">menu</span>
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div id="navbar">
      <ul id="nav-ul">
        <li>
          <div id="logo">
            <img id="penguin-logo" alt='' src='./everwikilogo.png'/>
            <NavLink id="logo-txt" exact to="/">EverWiki</NavLink>
          </div>
        </li>
        <li>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
