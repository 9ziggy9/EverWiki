import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as sessionActions from '../../store/session'

function CreateNoteForm({setShowModal, text, setText, title, setTitle}) {
  const dispatch = useDispatch();
  const sessionNote = useSelector(state => state.session.note.id);
  const [textStream, setTextStream] = useState('');

  function postNote() {
    return dispatch(sessionActions.newNote({
      title: 'testing',
      content: text,
    }));
  }

  function submitAndClose() {
    postNote();
    setShowModal(false);
    console.log(sessionNote);
  }

  return (
    <>
      <div id='note-form-container'>
        <TextEditor text={text}
                    setText={setText}
                    textStream={textStream}
                    setTextStream={setTextStream} />
      </div>
      <NavLink to='/note/:id'>
        <div id="editor-buttons">
          <button id="post-button" onClick={submitAndClose}>post</button>
          <button>dark mode</button>
          <button>vi mode</button>
          <button>help</button>
          <button>KaTeX help</button>
          <button>cancel</button>
        </div>
      </NavLink>
    </>
  );
}

export default CreateNoteForm;
