import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import FileTree from './components/FileTree';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <div className='app-container'>
        <div id='tree-pane'></div>
        <div id='doc-pane'></div>
        <div id='act-pane'></div>
        <footer>
          <p>tutorial</p>
          <p>about</p>
          <img id='gh' alt='' src='./GitHub_Logo.png'/>
        </footer>
      </div>
    </>
  );
}

export default App;
