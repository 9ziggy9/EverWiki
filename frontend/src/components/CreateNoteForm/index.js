import React from "react";
import './CreateNoteForm.css';
import TextEditor from '../TextEditor';
import {NavLink} from 'react-router-dom';

function CreateNoteForm({showModal, setShowModal}) {

  function submitAndClose() {
    setShowModal(false);
  }

  return (
    <>
      <div id='note-form-container'>
        <TextEditor />
      </div>
      <NavLink to='/note'>
        <button onClick={submitAndClose}>test</button>
      </NavLink>
    </>
  );
}

export default CreateNoteForm;
