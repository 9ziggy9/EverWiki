import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';

function CreateNoteForm({showModal, setShowModal, setNoteView}) {
  const [text, setText] = useState('hello world');
  const [textStream, setTextStream] = useState('');

  function submitAndClose() {
    setShowModal(false);
    setNoteView(textStream);
  }

  return (
    <>
      <div id='note-form-container'>
        <TextEditor text={text}
                    setText={setText}
                    textStream={textStream}
                    setTextStream={setTextStream}/>
      </div>
      <NavLink to='/note'>
        <button onClick={submitAndClose}>test</button>
      </NavLink>
    </>
  );
}

export default CreateNoteForm;
