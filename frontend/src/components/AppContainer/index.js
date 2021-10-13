import React from 'react';
import NoteView from './NoteView';
import './AppContainer.css';

function AppContainer() {
  return (
    <>
      <div className='app-container'>
        <div id='tree-pane'></div>
        <div id='doc-pane'>
          <NoteView />
        </div>
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

export default AppContainer;
