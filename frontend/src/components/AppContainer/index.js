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
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const sessionLibrary = useSelector(state => state.session.library);

  const [selectedNoteId, setSelectedNoteId] = useState(0);
  const [selectedNotebookId, setSelectedNotebookId] = useState(0);
  const [library, setLibrary] = useState(sessionLibrary);

  const FILETREE_SESSION = {
    library,
    selectedNoteId,
    setSelectedNoteId,
    selectedNotebookId,
    setSelectedNotebookId
  };

  function deleteNote() {
    dispatch(sessionActions.removeNote({id:selectedNoteId}));
  }

  function deleteNotebook() {
    dispatch(sessionActions.removeFromLibrary({id:selectedNotebookId}));
  }

  function demoUser() {
    dispatch(sessionActions.login({credential:"Demo-lition", password:"password"}));
  }

  let applicationModules;

  if (sessionUser) {
    applicationModules = (
      <>
        <div id='tree-pane'>
          <FileTree FILETREE_SESSION = {FILETREE_SESSION}/>
        </div>
        <div id='doc-pane'>
          <Route exact path={["/newNote","/note/:noteId"]}>
            <NoteView />
          </Route>
        </div>
        <div id='act-pane'>
          <p>notes</p>
          <CreateNoteFormModal btnName={'edit note'}
                               selectedNoteId={selectedNoteId}/>
          <CreateNoteFormModal btnName={'create note'}
                               selectedNotebookId={selectedNotebookId}/>
          <button onClick={deleteNote}>delete note</button>
          <p>notebooks</p>
          <NotebookModal />
          <button onClick={deleteNotebook}>delete notebook</button>
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

  useEffect(() => {
    if(sessionLibrary.length) {
      setLibrary(sessionLibrary);
      setSelectedNotebookId(sessionLibrary[0].id);
    }
  }, [sessionLibrary])

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
          <p onClick={demoUser}>demo</p>
          <a href="https://github.com/9ziggy9/EverWiki">
            <img id='gh' alt='' src='../GitHub_Logo.png'/>
          </a>
        </footer>
      </div>
    </>
  );
}

export default AppContainer;
