import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as sessionActions from '../../store/session'

function CreateNoteForm({setShowModal, setNoteView, text, setText}) {
  const dispatch = useDispatch();
  const sessionNote = useSelector((state) => state.session.note);
  const [textStream, setTextStream] = useState('');

  function postNote() {
    return dispatch(sessionActions.newNote({
      title: 'testing',
      content: text,
    }));
  }

  function submitAndClose() {
    postNote();
    console.log("Looking at:", sessionNote);
    setShowModal(false);
    setNoteView(text);
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
