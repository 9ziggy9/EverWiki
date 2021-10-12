import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'
import { NavLink } from 'react-router-dom';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div id='profile-container'>
      <div id="profile-dropdown">
      <form className='login-form' onSubmit={handleSubmit}>
        <ul className="login-form-errors">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label className='login-form-label'>
          <p className='login-form-names'>Username or Email</p>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className='login-form-label'>
          <p className='login-form-names'>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <NavLink to="/signup">
          <p>Register</p>
        </NavLink>
        <button className='login-form-button' type="submit">Log In</button>
      </form>
    </div>
    </div>
  );
}

export default LoginFormPage;
