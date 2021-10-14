import React from 'react';
import {useSelector} from 'react-redux';
import NoteView from './NoteView';
import './AppContainer.css';
import {useState} from 'react';
import CreateNoteFormModal from '../CreateNoteFormModal'

function AppContainer({ isLoaded }) {
  const [noteView, setNoteView] = useState('');
  const sessionUser = useSelector(state => state.session.user);
  let applicationModules;

  if(sessionUser) {
    applicationModules = (
      <>
        <div id='tree-pane'>
        </div>
        <div id='doc-pane'>
          { noteView && <NoteView noteView={noteView}/> }
        </div>
        <div id='act-pane'>
            <button>edit note</button>
            <CreateNoteFormModal
              setNoteView={setNoteView}
            />
            <button>delete note</button>
        </div>
      </>
    );
  } else {
    applicationModules = (
      <div id='splash-screen'>
      </div>
    );
  }

  return (
    <>
      <div className='app-container'>
        {isLoaded && applicationModules}
        <footer>
          <p>tutorial</p>
          <p>about</p>
          <img id='gh' alt='' src='./GitHub_Logo.png'/>
        </footer>
      </div>
    </>
  );
}

export default AppContainer;
