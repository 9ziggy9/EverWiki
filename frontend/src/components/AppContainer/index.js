import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NoteView from './NoteView';
import FileTree from './FileTree';
import './AppContainer.css';
import Navigation from '../Navigation';
import CreateNoteFormModal from '../CreateNoteFormModal';
import NotebookModal from './NotebookModal';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './LoginFormPage';
import SignupFormPage from './SignupFormPage';
import * as sessionActions from '../../store/session';

function AppContainer({ isLoaded }) {
  const [selectedNoteId, setSelectedNoteId] = useState(0);
  const [selectedNotebookId, setSelectedNotebookId] = useState(0);

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let applicationModules;

  if(sessionUser) {
    applicationModules = (
      <>
        <div id='tree-pane'>
          <FileTree
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            selectedNotebookId={selectedNotebookId}
            setSelectedNotebookId={setSelectedNotebookId} />
        </div>
        <div id='doc-pane'>
          <Route exact path={["/newNote","/note/:noteId"]}>
            <NoteView />
          </Route>
        </div>
        <div id='act-pane'>
          <p>notes</p>
          <button>edit note</button>
            <CreateNoteFormModal />
          <button>delete note</button>
          <p>notebooks</p>
          <button>edit notebook</button>
          <NotebookModal />
          <button>delete notebook</button>
        </div>
      </>
    );
  } else {
    applicationModules = (
      <div id='splash-screen'>
      </div>
    );
  }

  useEffect(() => {
    if(sessionUser) {
      dispatch(sessionActions.populateLibrary(sessionUser));
    }
  }, [dispatch, sessionUser]);

  useEffect(() => {
    if(sessionUser) {
      dispatch(sessionActions.compileNotes(sessionUser));
    }
  }, [dispatch, sessionUser]);


  return (
    <>
      <div className='app-container'>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && applicationModules}
        {isLoaded && (
          <Switch>
            <Route path="/login"><LoginFormPage /></Route>
            <Route path="/signup"><SignupFormPage /></Route>
          </Switch>
        )}
        <footer>
          <p>tutorial</p>
          <p>about</p>
          <img id='gh' alt='' src='../GitHub_Logo.png'/>
        </footer>
      </div>
    </>
  );
}

export default AppContainer;
