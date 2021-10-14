import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as sessionActions from '../../store/session'

function CreateNoteForm({setShowModal, setNoteView, text, setText}) {
  const dispatch = useDispatch();
  const sessionNote = useSelector((state) => state.session.noteId);
  const [textStream, setTextStream] = useState('');

  async function fetchNote() {
    const noteId = 6;
    await dispatch(sessionActions.grabNote(noteId));
    console.log("Looking at:", sessionNote);
    return;
  }

  function submitAndClose() {
    fetchNote();
    setShowModal(false);
    setNoteView(textStream);
  }

  return (
    <>
      <div id='note-form-container'>
        <TextEditor text={text}
                    setText={setText}
                    textStream={textStream}
                    setTextStream={setTextStream} />
      </div>
      <NavLink to='/note'>
        <button onClick={submitAndClose}>test</button>
      </NavLink>
    </>
  );
}

export default CreateNoteForm;
